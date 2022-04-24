import 'dart:convert' show json;

import 'package:flutter/material.dart';
import 'package:mobile_frontend/utils/api.dart';
import 'package:mobile_frontend/pages/auth_pages.dart';
import 'package:mobile_frontend/widgets/chat_group_list.dart';
import 'package:mobile_frontend/widgets/bottom_navbar.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

import '../utils/constants.dart' show secureStorage, websocketUrl;

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Map<String, dynamic> userData = {};
  List chatGroups = [];
  bool isLoggedIn = true;
  bool isLoading = true;
  int bottomNavbarIndex = 0;
  WebSocketChannel? ws;

  @override
  void initState() {
    super.initState();

    verifyToken(setTheTokens: true).then((bool? result) {
      if (result != null) setIsLoggedIn(result);

      setState((() {
        if (result == true) {
          ws = WebSocketChannel.connect(Uri.parse(
              websocketUrl + '?token=${userData['tokens']['access']}'));
        }
      }));

      ws?.stream.listen(handleWebsocket);
    });
  }

  @override
  void dispose() {
    super.dispose();
    ws?.sink.close();
  }

  Future<void> handleWebsocket(dynamic data) async {
    final jsonData = json.decode(data);
    final eventName = jsonData['event'];

    if (eventName == 'READY') {
      setState(() {
        // print(jsonData);
        userData = jsonData['payload']['user'];
        chatGroups = jsonData['payload']['chat_groups'];
        isLoading = false;
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
      isLoggedIn = status;
    });
  }

  void setTokens({String? access, String? refresh, bool reconnectWs = false}) {
    userData.putIfAbsent('tokens', () => {});
    setState(() {
      if (access != null) {
        userData['tokens']['access'] = access;
      }

      if (refresh != null) {
        userData['tokens']['refresh'] = refresh;
      }

      if (reconnectWs) {
        if (ws != null) {
          try {
            ws?.sink.close();
          } catch (e) {
            // ignore any errors while closing previous websocket connection
            // but im not sure if we even need to close the previous connection
            // ws = newInstance should be enough but I don't know if it may cause any problems
          }
        }
        ws = WebSocketChannel.connect(Uri.parse(
            websocketUrl + '?token=${userData['tokens']['access']}'));
        ws?.stream.listen(handleWebsocket);
      }
    });

    secureStorage.write(
        key: 'tokens', value: json.encode(userData['tokens']));
  }

  @override
  Widget build(BuildContext context) {
    if (isLoggedIn == false) {
      return LoginPage(setIsLoggedIn, setTokens);
    }

    if (isLoading) {
      return const Scaffold(
        body: Center(child: CircularProgressIndicator()),
      );
    }

    final body = ChatGroupList(chatGroups);

    return Scaffold(
        appBar: AppBar(title: const Text("Chat app")),
        // drawer: ChatGroupDrawer(chatGroups),
        bottomNavigationBar: BottomNavNar(
            bottomNavbarIndex,
            (int newIndex) =>
                setState(() => bottomNavbarIndex = newIndex)),
        body: body);
  }
}
