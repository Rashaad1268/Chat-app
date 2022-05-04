import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:mobile_frontend/utils/constants.dart';
import 'pages/home_page.dart';
import 'utils/colors.dart';

void main() async {
  await Hive.initFlutter();
  await Hive.openBox('Chat-app-storage');
  await Hive.openBox('Chat-app-settings');
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder(
        valueListenable: Hive.box('Chat-app-settings').listenable(),
        builder: (context, Box box, widget) {
          return MaterialApp(
            debugShowCheckedModeBanner: false,
            home: HomePage(),
            theme: ThemeData(
              brightness: box.get('isDarkMode', defaultValue: true)
                  ? Brightness.dark
                  : Brightness.light,
              primarySwatch: createTheme(fromListARGB(
                      box.get('theme', defaultValue: const [255, 33, 150, 243]))
                  .value
                  .toInt()),
            ),
          );
        });
  }
}
