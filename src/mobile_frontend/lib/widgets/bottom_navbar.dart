import 'package:flutter/material.dart';


class BottomNavNar extends StatelessWidget {
  int currentIndex;
  final void Function(int newIndex) setCurrentIndex;
  
  BottomNavNar(this.currentIndex, this.setCurrentIndex, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return NavigationBar(destinations: const [
      NavigationDestination(icon: Icon(Icons.home), label: "Home"),
      NavigationDestination(icon: Icon(Icons.settings), label: "Settings"),
    ]);
  }
}
