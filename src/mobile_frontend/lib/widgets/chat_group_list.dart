import 'package:flutter/material.dart';

import '../pages/chat_group_detail.dart';

class Tile extends StatelessWidget {
  final Map chatGroupData;
  const Tile(this.chatGroupData,
      {Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
        child: ListTile(
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 0),
      title: Text(chatGroupData['name']),
      onTap: () {
        Navigator.of(context).push(MaterialPageRoute(
            builder: (ctx) => ChatGroupDetail(
                chatGroupData)));
      },
      leading: CircleAvatar(
        backgroundImage:
            NetworkImage('http://127.0.0.1:8000${chatGroupData["icon"]}'),
      ),
    ));
  }
}

class ChatGroupList extends StatelessWidget {
  final List chatGroups;
  const ChatGroupList(this.chatGroups, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final diviededTiles = ListTile.divideTiles(
        context: context, tiles: chatGroups.map((e) => Tile(e))).toList();
    return ListView(
      padding: const EdgeInsets.all(10),
      children: diviededTiles,
    );
  }
}
