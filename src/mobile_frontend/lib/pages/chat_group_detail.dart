import 'package:flutter/material.dart';

class ChatGroupDetail extends StatelessWidget {
  final Map chatGroupData;
  const ChatGroupDetail(this.chatGroupData, {Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(chatGroupData['name'])),
    );
  }
}
