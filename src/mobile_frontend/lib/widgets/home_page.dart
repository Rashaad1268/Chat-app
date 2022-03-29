import 'dart:convert' show json;
import 'package:flutter/material.dart';
import 'package:mobile_frontend/widgets/authentication.dart';
import 'package:mobile_frontend/api.dart';
import '../constants.dart' show secureStorage;

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Map<String, dynamic> userData = {};
  Map<int, dynamic> chatGroups = {};
  bool isLoggedIn = true;

  @override
  void initState() {
    super.initState();

    verifyToken().then((bool result) => {setIsLoggedIn(result)});
    secureStorage.read(key: 'userData').then((data) => setState((() {
          if (data != null) {
            userData = json.decode(data);
          } else {
            // the user data does not exist for some reason
            setIsLoggedIn(false); // so make the user login again
          }
        })));
  }

  Future<bool> verifyToken() async {
    final tokenString = await secureStorage.read(key: 'userData');

    if (tokenString == null) return false;

    final tokens = json.decode(tokenString)['tokens'];

    if (tokens == null) {
      return false;
    }

    var response = await requestApi('post', 'auth/token/verify/',
        data: {'token': tokens['access']});

    return response.data.toString() == "{}";
  }

  void setIsLoggedIn(bool status) {
    setState(() {
      isLoggedIn = status;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (isLoggedIn == false) {
      return LoginPage(setIsLoggedIn);
    }

    String username = userData['username']
        .toString(); // userData['username'] maybe null so lets cast it to string

    return Scaffold(
        body: Align(
            child: Text(
              "Hello $username",
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            heightFactor: 15));
  }
}
