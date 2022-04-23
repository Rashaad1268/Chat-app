import 'dart:convert' show json;

import 'package:flutter/material.dart';
import 'package:mobile_frontend/utils/api.dart';
import 'package:mobile_frontend/pages/auth_pages.dart';
import 'package:mobile_frontend/widgets/drawer.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

import '../utils/constants.dart' show secureStorage, websocketUrl;

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

    verifyToken(setTheTokens: true).then((bool? result) {
      if (result != null) setIsLoggedIn(result);

      setState((() {
        if (result == true) {
          widget.ws = WebSocketChannel.connect(Uri.parse(
              websocketUrl + '?token=${widget.userData['tokens']['access']}'));
        }
      }));

      widget.ws?.stream.listen(handleWebsocket);
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
        // print(jsonData);
        widget.userData = jsonData['payload']['user'];
        widget.chatGroups = jsonData['payload']['chat_groups'];
        widget.isLoading = false;
      });
    } else {
      print(data);
    }
  }

  Future<bool?> verifyToken({bool setTheTokens = false}) async {
    final tokenString = await secureStorage.read(key: 'tokens');

    if (tokenString == null) return false;

    final Map tokens = json.decode(tokenString);

    if (tokens.isEmpty) {
      return false;
    }

    if (setTheTokens) {
      setTokens(access: tokens['access'], refresh: tokens['refresh']);
    }

    var response = await requestApiAndUpdateTokens(
        'post', 'auth/token/verify/', tokens, setTokens, setIsLoggedIn,
        data: {'token': tokens['access']}, reconnectWs: true);

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
        if (widget.ws != null) {
          try {
            widget.ws?.sink.close();
          } catch (e) {
            // ignore any errors while closing previous websocket connection
            // but im not sure if we even need to close the previous connection
            // widget.ws = newInstance should be enough but I don't know if it may cause any problems
          }
        }
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
        appBar: AppBar(title: const Text("Chat app")),
        drawer: ChatGroupDrawer(widget.chatGroups),
        body: Align(
            child: Text(
              "Hello $username",
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            heightFactor: 15));
  }
}
