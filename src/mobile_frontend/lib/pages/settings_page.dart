import 'package:flutter/material.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';
import 'package:hive_flutter/hive_flutter.dart';
import '../utils/colors.dart';

class SettingsPage extends StatefulWidget {
  SettingsPage({Key? key}) : super(key: key);

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  late bool isDarkMode;
  late Color theme;
  late Box box;

  @override
  void initState() {
    super.initState();

    box = Hive.box('Chat-app-settings');
    isDarkMode = box.get('isDarkMode', defaultValue: true);
    theme =
        fromListRGBO(box.get('theme', defaultValue: const [1.0, 33, 150, 243]));
  }

  void changeMode(bool newMode) {
    setState(() {
      isDarkMode = newMode;
    });
    // print(theme);
    box.put('isDarkMode', newMode);
  }

  void changeTheme(Color newTheme) {
    setState(() {
      theme = newTheme;
    });
    final value = [theme.alpha, theme.red, theme.green, theme.blue];
    box.put('theme', value);
  }

  void showColorPicker() {
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            titlePadding: const EdgeInsets.all(0),
            contentPadding: const EdgeInsets.all(0),
            content: SingleChildScrollView(
              child: ColorPicker(
                pickerColor: theme,
                onColorChanged: changeTheme,
                colorPickerWidth: 300,
                pickerAreaHeightPercent: 0.7,
                enableAlpha: true,
                // labelTypes: true,
                displayThumbColor: true,
                // paletteType: true,
                pickerAreaBorderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(2),
                  topRight: Radius.circular(2),
                ),
                hexInputBar: true,
                // colorHistory: widget.colorHistory,
                // onHistoryChanged: widget.onHistoryChanged,
              ),
            ),
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Column(children: <Widget>[
      SwitchListTile(
          title: const Text('Dark Mode'),
          value: isDarkMode,
          onChanged: changeMode),
      ListTile(
          title: const Text('Theme'),
          trailing: ElevatedButton(
              style: ElevatedButton.styleFrom(primary: theme),
              child: const SizedBox.shrink(),
              onPressed: showColorPicker))
    ]));
  }
}
