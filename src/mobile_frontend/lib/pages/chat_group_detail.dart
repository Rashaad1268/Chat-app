import 'package:flutter/material.dart';
import 'package:mobile_frontend/pages/%20channel_detail.dart';
import 'package:overlapping_panels/overlapping_panels.dart';
import './channel_list.dart';

class ChatGroupDetail extends StatefulWidget {
  final Map chatGroupData;
  final Function setChannelMessages;
  final Map channelMessages;
  late Map currentChannel;
  ChatGroupDetail(this.chatGroupData, this.setChannelMessages, this.channelMessages, {Key? key})
      : super(key: key);

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
                left: ChatGroupChannelList(widget.chatGroupData),
                main: ChannelDetail(widget.chatGroupData['channels'][0],
                    widget.setChannelMessages, widget.channelMessages),
                right: const Scaffold(body: Center(child: Text('right'))))
          ],
        ));
  }
}
