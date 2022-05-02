import 'package:flutter/material.dart';


class DrawerTile extends StatelessWidget {
  final Map<String, dynamic> chatGroupData;
  const DrawerTile(this.chatGroupData, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(chatGroupData['name']),
      leading: CircleAvatar(
        backgroundImage:
            NetworkImage('http://127.0.0.1:8000${chatGroupData["icon"]}'),
      ),
    );
  }
}

class ChatGroupDrawer extends StatefulWidget {
  final List chatGroups;
  const ChatGroupDrawer(this.chatGroups, {Key? key}) : super(key: key);

  @override
  State<ChatGroupDrawer> createState() => _ChatGroupDrawerState();
}

class _ChatGroupDrawerState extends State<ChatGroupDrawer> {
  @override
  Widget build(BuildContext context) {
    // print(widget.chatGroups);
    return Drawer(
        child: ListView(
      children: widget.chatGroups.map((d) => DrawerTile(d)).toList(),
    ));
  }
}
