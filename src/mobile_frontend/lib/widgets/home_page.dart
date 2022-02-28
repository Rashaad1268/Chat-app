import 'dart:convert' show Encoding, json;
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;
import 'package:mobile_frontend/widgets/authentication.dart';
import '../constants.dart' show apiUrl;

const secureStorage = FlutterSecureStorage();

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Map<int, dynamic> chatGroups = {};
  bool isLoggedIn = false;

  _HomePageState() {
    verifyToken().then((bool result) => {setIsLoggedIn(result)});
  }

  Future<bool> verifyToken() async {
    final token = await secureStorage.read(key: "accessToken");
    if (token == null) {
      return false;
    }

    var response = await http.post(Uri.parse(apiUrl + "auth/token/verify/"),
        body: json.encode({"token": token}),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        });

    return response.body == "{}";
  }

  void setIsLoggedIn(bool status) {
    setState(() {
      isLoggedIn = status;
    });
  }

  @override
  Widget build(BuildContext context) {
    print("Login Status " + isLoggedIn.toString());
    if (isLoggedIn == false) {
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
