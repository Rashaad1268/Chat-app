import 'dart:convert' show json;

import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import 'package:mobile_frontend/pages/settings_page.dart';
import 'package:mobile_frontend/utils/api.dart';
import 'package:mobile_frontend/pages/auth_pages.dart';
import 'package:mobile_frontend/widgets/chat_group_list.dart';
import 'package:mobile_frontend/widgets/bottom_navbar.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

import '../utils/constants.dart'
    show JWTTokenNotifier, jwtTokenProvider, websocketUrl, storage;

class HomePage extends ConsumerStatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends ConsumerState<HomePage> {
  List chatGroups = [];
  Map userData = {};
  bool isLoading = true;
  int bottomNavbarIndex = 0;
  WebSocketChannel? ws;
  late APIClient apiClient;
  late JWTTokenNotifier jwtTokenNotifier;

  @override
  void initState() {
    super.initState();
    jwtTokenNotifier = ref.read(jwtTokenProvider.notifier);
    apiClient = APIClient(ref.read(jwtTokenProvider.notifier));

    verifyToken().then((bool? result) {
      if (result != null) jwtTokenNotifier.setIsLoggedIn(result);

      setState((() {
        final tokens = (ref.read(jwtTokenProvider) as Map)['tokens'];
        if (result == true) {
          ws = WebSocketChannel.connect(
              Uri.parse(websocketUrl + '?token=${tokens['access']}'));
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
      // print(jsonData);
      setState(() {
        chatGroups = jsonData['payload']['chat_groups'];
        userData = jsonData['payload']['user'];
        isLoading = false;
      });
    } else {
      print(data);
    }
  }

  Future<bool?> verifyToken() async {
    final tokens = await storage.get('tokens');

    if (tokens == null || tokens.isEmpty) return false;

    var response = await apiClient.requestApi('post', 'auth/token/verify/',
        data: {'token': tokens['access']});

    if (response == null) return null;

    return response.data.toString() == '{}';
  }

  @override
  Widget build(BuildContext context) {
    if (jwtTokenNotifier.data['isLoggedIn'] == false) {
      return LoginPage();
    }

    if (isLoading) {
      return const Scaffold(
        body: Center(child: CircularProgressIndicator()),
      );
    }

    var body;

    switch (bottomNavbarIndex) {
      case 0:
        body = ChatGroupList(chatGroups);
        break;

      case 1:
        body = SettingsPage();
    }

    return Scaffold(
        appBar: AppBar(title: const Text('Chat app')),
        // drawer: ChatGroupDrawer(chatGroups),
        bottomNavigationBar: BottomNavNar(bottomNavbarIndex,
            (int newIndex) => setState(() => bottomNavbarIndex = newIndex)),
        body: body);
  }
}
