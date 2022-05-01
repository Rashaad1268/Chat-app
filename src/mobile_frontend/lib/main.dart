import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'pages/home_page.dart';

void main() async {
  await Hive.initFlutter();
  await Hive.openBox('Chat-app-storage');
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
      darkTheme: ThemeData(
        brightness:
            Brightness.dark, // TODO: Check the user settings and set this value
      ),
    );
  }
}
