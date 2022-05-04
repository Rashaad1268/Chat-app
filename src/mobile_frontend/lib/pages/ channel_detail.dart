import 'package:flutter/material.dart';

class ChannelDetail extends StatefulWidget {
  final Map channelData;
  final Function setChannelMessages;
  final Map channelMessages;
  const ChannelDetail(
      this.channelData, this.setChannelMessages, this.channelMessages,
      {Key? key})
      : super(key: key);

  @override
  State<ChannelDetail> createState() => _ChannelDetailState();
}

class _ChannelDetailState extends State<ChannelDetail> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(body: Center(child: Text('Chat')));
  }
}
