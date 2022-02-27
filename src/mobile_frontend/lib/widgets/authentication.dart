import 'package:flutter/material.dart';
import 'dart:convert' show json;
import 'package:http/http.dart' as http;
import '../constants.dart' show apiUrl, secureStorage;

class LoginPage extends StatefulWidget {
  void Function(bool) setIsLoggedIn;
  LoginPage(this.setIsLoggedIn, {Key? key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState(setIsLoggedIn);
}

class _LoginPageState extends State<LoginPage> {
  void Function(bool) setIsLoggedIn;
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  _LoginPageState(this.setIsLoggedIn);

  @override
  void dispose() {
    super.dispose();
    emailController.dispose();
    passwordController.dispose();
  }

  @override
  void initState() {
    super.initState();

    emailController.addListener(validateEmail);
  }

  Future<bool> attemptLogin(String email, String password) async {
    var response = await http.post(Uri.parse(apiUrl + 'auth/token/'),
        body: json.encode({'email': email, 'password': password}),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        });
    print(response.body);
    if (response.statusCode == 200) {
      final tokens = json.decode(response.body);
      await secureStorage.write(key: 'accessToken', value: tokens['access']);
      await secureStorage.write(key: 'refreshToken', value: tokens['refresh']);
      setIsLoggedIn(true);
      print(await secureStorage.read(key: 'accessToken')); // prints null for some reason
      print(await secureStorage.read(key: 'refreshToken')); // same
      return true;
    } else if (response.statusCode == 400) {
      // Account with the given credentials does not exist
      setIsLoggedIn(false);
      return false;
    } else {
      setIsLoggedIn(false);
      return false;
    }
  }

  String? validateEmail() {
    final email = emailController.text;
    if (email == '') {
      return 'Enter a valid email';
    } else {
      return null;
    }
    return null;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Padding(
            padding: const EdgeInsets.all(10),
            child: ListView(
              children: <Widget>[
                Container(
                    alignment: Alignment.center,
                    padding: const EdgeInsets.all(10),
                    child: const Text(
                      'Welcome back!',
                      style:
                          TextStyle(fontWeight: FontWeight.w500, fontSize: 25),
                    )),
                Container(
                    alignment: Alignment.center,
                    padding: const EdgeInsets.only(top: 40, bottom: 20),
                    child: const Text(
                      'Log in',
                      style: TextStyle(fontSize: 20),
                    )),
                Container(
                  padding: const EdgeInsets.all(10),
                  child: TextField(
                    controller: emailController,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Email',
                    ),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.fromLTRB(10, 10, 10, 10),
                  child: TextField(
                    obscureText: true,
                    controller: passwordController,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Password',
                    ),
                  ),
                ),
                // The backend doesn't have password reset yet
                // TextButton(
                //   onPressed: () {
                //     password reset screen
                //   },
                //   child: const Text('Forgot Password',),
                // ),
                Container(
                    height: 50,
                    padding: const EdgeInsets.fromLTRB(10, 0, 10, 0),
                    child: ElevatedButton(
                      child: const Text('Login'),
                      onPressed: () {
                        attemptLogin(
                                emailController.text, passwordController.text)
                            .then((loginStatus) => null);
                      },
                    )),
                Row(
                  children: <Widget>[
                    const Text("Don't have account?"),
                    TextButton(
                      child: const Text(
                        'Sign up',
                        style: TextStyle(fontSize: 14),
                      ),
                      onPressed: () {
                        Navigator.push(context,
                            MaterialPageRoute(builder: (ctx) {
                          return SignupPage(setIsLoggedIn);
                        }));
                      },
                    )
                  ],
                  mainAxisAlignment: MainAxisAlignment.center,
                ),
              ],
            )));
  }
}

class SignupPage extends StatefulWidget {
  void Function(bool) setIsLoggedIn;

  SignupPage(this.setIsLoggedIn, {Key? key}) : super(key: key);

  @override
  _SignupPageState createState() => _SignupPageState(setIsLoggedIn);
}

class _SignupPageState extends State<SignupPage> {
  void Function(bool) setIsLoggedIn;
  final usernameController = TextEditingController();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  _SignupPageState(this.setIsLoggedIn) : super();

  @override
  void dispose() {
    super.dispose();
    usernameController.dispose();
    emailController.dispose();
    passwordController.dispose();
  }

  Future<bool> attemptSignup(
      String username, String email, String password) async {
    var response = await http.post(Uri.parse(apiUrl + 'auth/signup/'),
        body: json.encode(
            {'username': username, 'email': email, 'password': password}),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        });
    if (response.statusCode == 200) {
      final tokens = json.decode(response.body);
      await secureStorage.write(key: 'accessToken', value: tokens['access']);
      await secureStorage.write(key: 'refreshToken', value: tokens['refresh']);
      setIsLoggedIn(true);
      return true;
    } else {
      setIsLoggedIn(false);
      return false;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Padding(
            padding: const EdgeInsets.all(10),
            child: ListView(
              children: <Widget>[
                Container(
                    alignment: Alignment.center,
                    padding: const EdgeInsets.all(10),
                    child: const Text(
                      'Welcome!',
                      style:
                          TextStyle(fontWeight: FontWeight.w500, fontSize: 25),
                    )),
                Container(
                    alignment: Alignment.center,
                    padding: const EdgeInsets.only(top: 40, bottom: 20),
                    child: const Text(
                      'Sign up',
                      style: TextStyle(fontSize: 20),
                    )),
                Container(
                  padding: const EdgeInsets.all(10),
                  child: TextField(
                    controller: usernameController,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Username',
                    ),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.all(10),
                  child: TextField(
                    controller: emailController,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Email',
                    ),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.fromLTRB(10, 10, 10, 10),
                  child: TextField(
                    obscureText: true,
                    controller: passwordController,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Password',
                    ),
                  ),
                ),
                Container(
                    height: 50,
                    padding: const EdgeInsets.fromLTRB(10, 0, 10, 0),
                    child: ElevatedButton(
                      child: const Text('Signup'),
                      onPressed: () {
                        attemptSignup(usernameController.text,
                                emailController.text, passwordController.text)
                            .then((signupStatus) => null);
                        Navigator.pop(context);
                      },
                    )),
                Row(
                  children: <Widget>[
                    const Text('Already have an accout'),
                    TextButton(
                      child: const Text(
                        'Login',
                        style: TextStyle(fontSize: 14),
                      ),
                      onPressed: () {
                        Navigator.push(context,
                            MaterialPageRoute(builder: (ctx) {
                          return LoginPage(setIsLoggedIn);
                        }));
                      },
                    )
                  ],
                  mainAxisAlignment: MainAxisAlignment.center,
                ),
              ],
            )));
  }
}
