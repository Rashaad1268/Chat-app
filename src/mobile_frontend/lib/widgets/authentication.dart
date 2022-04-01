import 'dart:convert' show json;
import 'package:flutter/material.dart';
import '../api.dart';
import '../constants.dart' show emailRegex, secureStorage;

String? validateEmail(String? email) {
  if (email == null || emailRegex.hasMatch(email) == false) {
    return 'Enter a valid email';
  }

  return null;
}

String? validatePassword(String? password) {
  /*
  Check if a password contains
  at lest 8 characters
  1 uppercase letter
  */
  if (password == null) {
    return 'Enter a password';
  }

  throw Exception("Not implemented yet");
}

class LoginPage extends StatefulWidget {
  final void Function(bool) setIsLoggedIn;
  final _formKey = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  LoginPage(this.setIsLoggedIn, {Key? key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  void dispose() {
    super.dispose();
    widget.emailController.dispose();
    widget.passwordController.dispose();
  }

  Future<bool> attemptLogin(String email, String password) async {
    var response = await requestApi('post', 'auth/token/',
        data: {"email": email, "password": password});

    if (response.statusCode == 200) {
      Map<dynamic, dynamic> userData = response.data;
      await secureStorage.write(key: 'userData', value: json.encode(userData));
      widget.setIsLoggedIn(true);
      return true;
    } else if (response.statusCode == 400) {
      // Put a message saying that an account with the given credentials does not exist
      widget.setIsLoggedIn(false);
      return false;
    } else {
      widget.setIsLoggedIn(false);
      return false;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Form(
            key: widget._formKey,
            child: Padding(
                padding: const EdgeInsets.all(10),
                child: ListView(
                  children: <Widget>[
                    Container(
                        alignment: Alignment.center,
                        padding: const EdgeInsets.all(10),
                        child: const Text(
                          'Welcome back!',
                          style: TextStyle(
                              fontWeight: FontWeight.w500, fontSize: 25),
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
                      child: TextFormField(
                        controller: widget.emailController,
                        autovalidateMode: AutovalidateMode.always,
                        validator: validateEmail,
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
                        controller: widget.passwordController,
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
                          style: const ButtonStyle(),
                          child: const Text('Login'),
                          onPressed: () {
                            if (widget._formKey.currentState!.validate()) {
                              attemptLogin(widget.emailController.text,
                                      widget.passwordController.text)
                                  .then((loginStatus) => null);
                            }
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
                              return SignupPage(widget.setIsLoggedIn);
                            }));
                          },
                        )
                      ],
                      mainAxisAlignment: MainAxisAlignment.center,
                    ),
                  ],
                ))));
  }
}

class SignupPage extends StatefulWidget {
  final void Function(bool) setIsLoggedIn;
  final usernameController = TextEditingController();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  SignupPage(this.setIsLoggedIn, {Key? key}) : super(key: key);

  @override
  // ignore: no_logic_in_create_state
  _SignupPageState createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  @override
  void dispose() {
    super.dispose();
    widget.usernameController.dispose();
    widget.emailController.dispose();
    widget.passwordController.dispose();
  }

  Future<bool> attemptSignup(
      String username, String email, String password) async {
    var response = await requestApi('post', 'auth/signup/',
        data: {"username": username, "password": password});
    final userData = response.data;

    if (response.statusCode == 200) {
      await secureStorage.write(key: 'userData', value: json.encode(userData));
      widget.setIsLoggedIn(true);
      return true;
    } else {
      widget.setIsLoggedIn(false);
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
                    controller: widget.usernameController,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Username',
                    ),
                  ),
                ),
                Container(
                  padding: const EdgeInsets.all(10),
                  child: TextField(
                    controller: widget.emailController,
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
                    controller: widget.passwordController,
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
                        attemptSignup(
                                widget.usernameController.text,
                                widget.emailController.text,
                                widget.passwordController.text)
                            .then((signupStatus) => null);
                        Navigator.pop(context);
                      },
                    )),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    const Text('Already have an accout?'),
                    TextButton(
                      child: const Text(
                        'Login',
                        style: TextStyle(fontSize: 14),
                      ),
                      onPressed: () {
                        Navigator.push(context,
                            MaterialPageRoute(builder: (ctx) {
                          return LoginPage(widget.setIsLoggedIn);
                        }));
                      },
                    )
                  ],
                ),
              ],
            )));
  }
}
