import 'package:flutter/material.dart';

class BottomNavNar extends StatelessWidget {
  final int currentIndex;
  final void Function(int newIndex) setCurrentIndex;

  const BottomNavNar(this.currentIndex, this.setCurrentIndex, {Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return NavigationBarTheme(
      data: NavigationBarThemeData(
        indicatorColor: Colors.white.withOpacity(0.5)
      ),
        child: NavigationBar(
            backgroundColor: Theme.of(context).primaryColor,
            selectedIndex: currentIndex,
            onDestinationSelected: setCurrentIndex,
            destinations: const [
          NavigationDestination(
              icon: Icon(Icons.home),
              label: 'Home'),
          NavigationDestination(icon: Icon(Icons.settings), label: 'Settings'),
        ]));
  }
}
