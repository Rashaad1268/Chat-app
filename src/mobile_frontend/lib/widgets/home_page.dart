import 'dart:convert' show Encoding, json;
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:http/retry.dart';
import 'package:mobile_frontend/widgets/authentication.dart';
import '../constants.dart' show secureStorage, apiUrl;

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Map<int, dynamic> chatGroups = {};
  bool isLoggedIn = false;

  _HomePageState() {
    verifyToken().then((_) => {});
  }

  Future<void> verifyToken() async {
    final token = await secureStorage.read(key: "accessToken");
    print(token);
    if (token == null) {
      setState(() => isLoggedIn = false);
      return null;
    }

    var response = await http.post(Uri.parse(apiUrl + "auth/token/verify/"),
        body: json.encode({"token": token}),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        });

    setState(() {
      isLoggedIn = response.body == "{}";
    });
  }

  void setIsLoggedIn(bool status) {
    setState(() {
      isLoggedIn = status;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (!isLoggedIn) {
      return LoginPage(setIsLoggedIn);
    }

    return const Scaffold(
        body: Align(
            child: Text(
              'Home page',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            heightFactor: 15));
  }
}
