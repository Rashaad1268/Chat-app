import 'package:flutter/material.dart';
import 'package:mobile_frontend/pages/channel_detail.dart';
import 'package:overlapping_panels/overlapping_panels.dart';
import './channel_list.dart';

class ChatGroupDetail extends StatefulWidget {
  final Map chatGroupData;
  Map<String, dynamic> currentChannel = {};
  ChatGroupDetail(this.chatGroupData, {Key? key}) : super(key: key) {
    currentChannel = chatGroupData['channels'][0];
  }

  @override
  State<ChatGroupDetail> createState() => _ChatGroupDetailState();
}

class _ChatGroupDetailState extends State<ChatGroupDetail> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(),
        body: Stack(
          children: [
            OverlappingPanels(
                left:
                    ChatGroupChannelList(widget.chatGroupData, widget.currentChannel, (Map<String, dynamic> channel){setState(() {
                      widget.currentChannel = channel;
                    });}),
                main: ChannelDetail(widget.currentChannel),
                right: const Scaffold(body: Center(child: Text('right'))))
          ],
        ));
  }
}
