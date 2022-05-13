import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:riverpod/riverpod.dart';

MaterialColor createTheme(int primary) {
  return MaterialColor(
    primary,
    const <int, Color>{
      50: Color(0xFFE3F2FD),
      100: Color(0xFFBBDEFB),
      200: Color(0xFF90CAF9),
      300: Color(0xFF64B5F6),
      400: Color(0xFF42A5F5),
      500: Color(0xFF2196F3),
      600: Color(0xFF1E88E5),
      700: Color(0xFF1976D2),
      800: Color(0xFF1565C0),
      900: Color(0xFF0D47A1),
    },
  );
}

const baseUrl = '127.0.0.1:8000/';
const apiUrl = 'http://${baseUrl}api/';
const websocketUrl = 'ws://${baseUrl}api/ws/';

final Box storage = Hive.box('Chat-app-storage');

final jwtTokenProvider = StateNotifierProvider((ref) {
  return JWTTokenNotifier();
});

class JWTTokenNotifier extends StateNotifier<Map> {
  JWTTokenNotifier()
      : super({
          'tokens': storage.get('tokens', defaultValue: {}),
          'isLoggedIn': true
        });

  Map get data => state;

  void setData(Map newData) => state.addAll(newData);
  void setIsLoggedIn(bool status) => state['isLoggedIn'] = status;
  void setTokens({String? access, String? refresh}) {
    if (access != null) {
      state['tokens']['access'] = access;
    }
    if (refresh != null) {
      state['tokens']['refresh'] = refresh;
    }

    storage.put('tokens', state['tokens']);
  }

  void clear() => state.clear();
}

final channelMessagesProvider = StateNotifierProvider(
    (ref) => ChannelMessageNotifier()); // TODO: implement custom cache

class ChannelMessageNotifier extends StateNotifier<Map<String, List<Map>>> {
  ChannelMessageNotifier() : super({});

  Map<String, List<Map>> get data => state;

  void setChannelMessages(String channelId, List<Map<String, dynamic>> messages,
      [bool overwrite = false]) {
    state[channelId] = messages;
  }

  void addMessage(String channelId, Map messageData) {
    if (!state.containsKey(channelId)) {
      throw Exception('Channel id does not already exist to put a message');
    }
    state[channelId]?.add(messageData);
  }

  void addMessages(String channelId, List<Map> messages,
      {required bool appendToEnd}) {
    if (!state.containsKey(channelId)) {
      throw Exception('Channel id does not already exist to put a message');
    }

    if (appendToEnd) {
      state[channelId] = [...messages, ...state[channelId]!];
    } else {
      state[channelId] = [...state[channelId]!, ...messages];
    }
  }

  List<Map>? getMessagesForChannel(String channelId) {
    if (!data.containsKey(channelId)) throw Exception("Invalid channel id");
    return data[channelId];
  }
}

final emailRegex = RegExp(
    r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
