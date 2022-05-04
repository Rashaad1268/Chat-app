import 'package:flutter/material.dart';

import '../pages/chat_group_detail.dart';

class Tile extends StatelessWidget {
  final Map chatGroupData;
  final Function setChannelMessages;
  final Map channelMessages;
  const Tile(this.chatGroupData, this.setChannelMessages, this.channelMessages, {Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
        child: ListTile(
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 0),
      title: Text(chatGroupData['name']),
      onTap: () {
        Navigator.of(context).push(MaterialPageRoute(
            builder: (ctx) =>
                ChatGroupDetail(chatGroupData, setChannelMessages, channelMessages)));
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
  final Function setChannelMessages;
  final Map channelMessages;
  const ChatGroupList(
      this.chatGroups, this.setChannelMessages, this.channelMessages,
      {Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final diviededTiles = ListTile.divideTiles(
        context: context,
        tiles: chatGroups
            .map((e) => Tile(e, setChannelMessages, channelMessages))).toList();
    return ListView(
      padding: const EdgeInsets.all(10),
      children: diviededTiles,
    );
  }
}
