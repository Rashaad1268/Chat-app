import 'package:flutter/material.dart';
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

const apiUrl = 'http://127.0.0.1:8000/api/';
const websocketUrl = 'ws://127.0.0.1:8000/api/ws/';

final userDataProvider = StateNotifierProvider((ref) {
  return UserDataNotifier();
});

class UserDataNotifier extends StateNotifier<Map> {
  UserDataNotifier() : super({});

  void setData(Map newData) => state = newData;
  void setTokens(String? accessToken, String? refreshToken) {
    state.putIfAbsent('tokens', () => {});
    if (accessToken != null) {
      state['tokens'] = accessToken;
    }
    if (refreshToken != null) {
      state['refresh'] = refreshToken;
    }
  }

  void clear() => state.clear();
}

final emailRegex = RegExp(
    r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
