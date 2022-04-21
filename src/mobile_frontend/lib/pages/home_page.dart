import 'dart:convert' show json;

import 'package:flutter/material.dart';
import 'package:mobile_frontend/api.dart';
import 'package:mobile_frontend/pages/auth_pages.dart';
import 'package:mobile_frontend/widgets/side_bar.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

import '../constants.dart' show secureStorage, websocketUrl;

class HomePage extends StatefulWidget {
  Map<String, dynamic> userData = {};
  List chatGroups = [];
  bool isLoggedIn = true;
  bool isLoading = true;
  WebSocketChannel? ws;

  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();

    verifyToken().then((bool? result) {
      if (result != null) setIsLoggedIn(result);

      secureStorage.read(key: 'tokens').then((tokenData) {
        setState((() {
          if (tokenData != null) {
            if (result == true) {
              widget.ws = WebSocketChannel.connect(Uri.parse(
                  websocketUrl + '?token=${json.decode(tokenData)['access']}'));
            }
          } else {
            // the user data does not exist for some reason
            setIsLoggedIn(false); // so make the user login again
          }
        }));

        widget.ws?.stream.listen(handleWebsocket);
      });
    });
  }

  @override
  void dispose() {
    super.dispose();
    widget.ws?.sink.close();
  }

  Future<void> handleWebsocket(dynamic data) async {
    final jsonData = json.decode(data);
    final eventName = jsonData['event'];

    if (eventName == 'READY') {
      setState(() {
        print(jsonData);
        widget.userData = jsonData['payload']['user'];
        widget.chatGroups = jsonData['payload']['chat_groups'];
        widget.isLoading = false;
      });
    } else {
      print(data);
    }
  }

  Future<bool?> verifyToken() async {
    final tokenString = await secureStorage.read(key: 'tokens');

    if (tokenString == null) return false;

    final Map tokens = json.decode(tokenString);

    if (tokens.isEmpty) {
      return false;
    }

    var response = await requestApiAndUpdateTokens(
        'post', 'auth/token/verify/', tokens, setTokens, setIsLoggedIn,
        data: {'token': tokens['access']});

    if (response == null) return null;

    return response.data.toString() == '{}';
  }

  void setIsLoggedIn(bool status) {
    setState(() {
      widget.isLoggedIn = status;
    });
  }

  void setTokens({String? access, String? refresh, bool reconnectWs = false}) {
    widget.userData.putIfAbsent('tokens', () => {});
    setState(() {
      if (access != null) {
        widget.userData['tokens']['access'] = access;
      }

      if (refresh != null) {
        widget.userData['tokens']['refresh'] = refresh;
      }

      if (reconnectWs) {
        widget.ws = WebSocketChannel.connect(Uri.parse(
            websocketUrl + '?token=${widget.userData['tokens']['access']}'));
        widget.ws?.stream.listen(handleWebsocket);
      }
    });

    secureStorage.write(
        key: 'tokens', value: json.encode(widget.userData['tokens']));
  }

  @override
  Widget build(BuildContext context) {
    if (widget.isLoggedIn == false) {
      return LoginPage(setIsLoggedIn, setTokens);
    }

    if (widget.isLoading) {
      return const Scaffold(
        body: Center(child: CircularProgressIndicator()),
      );
    }

    String username = widget.userData['username']
        .toString(); // userData['username'] maybe null so lets cast it to string

    return Scaffold(
        drawer: ChatGroupSideBar(widget.chatGroups),
        body: Align(
            child: Text(
              "Hello $username",
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            heightFactor: 15));
  }
}
