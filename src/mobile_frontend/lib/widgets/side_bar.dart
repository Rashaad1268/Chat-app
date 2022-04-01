import 'package:flutter/material.dart';

class ChatGroupSideBar extends StatefulWidget {
  final List chatGroups;
  const ChatGroupSideBar(this.chatGroups, {Key? key}) : super(key: key);

  @override
  State<ChatGroupSideBar> createState() => _ChatGroupSideBarState();
}

class _ChatGroupSideBarState extends State<ChatGroupSideBar> {

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView()
    );
  }
}
