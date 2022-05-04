import 'package:flutter/material.dart';

class ChatGroupChannelList extends StatefulWidget {
  final Map chatGroupData;
  const ChatGroupChannelList(this.chatGroupData, {Key? key}) : super(key: key);

  @override
  State<ChatGroupChannelList> createState() => _ChatGroupChannelListState();
}

class _ChatGroupChannelListState extends State<ChatGroupChannelList> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          Expanded(
            child: SafeArea(
              child: Container(
                  decoration:
                      BoxDecoration(borderRadius: BorderRadius.circular(16)),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        decoration: const BoxDecoration(
                            border: Border(bottom: BorderSide())),
                        padding: const EdgeInsets.only(
                            left: 16, right: 16, bottom: 16),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Expanded(
                                    child: Padding(
                                  padding: const EdgeInsets.only(top: 25),
                                  child: Text(
                                    widget.chatGroupData['name'],
                                    style: const TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 18),
                                  ),
                                )),
                              ],
                            ),
                            Text(widget.chatGroupData['description'] ?? '')
                          ],
                        ),
                      ),
                      Expanded(
                        child: Material(
                          child: ListView(
                            children: [
                              const Padding(
                                padding: EdgeInsets.only(
                                    top: 16, left: 16, right: 16),
                                child: Text(
                                  'TEXT CHANNELS',
                                  style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontSize: 12,
                                  ),
                                ),
                              ),
                              ...widget.chatGroupData['channels']
                                  .map((channel) => ListTile(
                                        leading: const Icon(Icons.tag),
                                        horizontalTitleGap: 0,
                                        title: Text(channel['name']),
                                        onTap: () {},
                                      )),
                            ],
                          ),
                        ),
                      ),
                    ],
                  )),
            ),
          ),
          Container(
            width: 50,
          )
        ],
      ),
    );
  }
}
