import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:mobile_frontend/utils/api.dart';
import 'package:mobile_frontend/utils/constants.dart';
import 'package:overlapping_panels/overlapping_panels.dart';

class ChannelDetail extends ConsumerStatefulWidget {
  final Map<String, dynamic> channelData;
  late ChannelMessageNotifier channelMessages;
  late APIClient apiClient;
  ChannelDetail(this.channelData, {Key? key}) : super(key: key);

  @override
  ConsumerState<ChannelDetail> createState() => _ChannelDetailState();
}

class _ChannelDetailState extends ConsumerState<ChannelDetail> {
  @override
  void initState() {
    super.initState();
    widget.channelMessages = ref.read(channelMessagesProvider.notifier);
    widget.apiClient = APIClient(ref.read(jwtTokenProvider.notifier));

    if (!widget.channelMessages.data.containsKey(widget.channelData['id'])) {
      widget.apiClient
          .requestApi('get', 'channels/${widget.channelData["id"]}/messages/')
          .then((res) {
        final messages = res?.data;
        widget.channelMessages.setChannelMessages(
            widget.channelData['id'],
            List<Map<String, dynamic>>.from(
              messages as List? ?? <Map<String, dynamic>>[],
            ));
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(children: [
                  const Text(
                    '#',
                    style: TextStyle(color: Colors.white54),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8),
                    child: Text(widget.channelData['name'],
                        style: const TextStyle(fontSize: 18)),
                  )
                ])
              ],
            ),
          ],
        ),
        leading: IconButton(
          icon: const Icon(Icons.menu),
          onPressed: () {
            OverlappingPanels.of(context)?.reveal(RevealSide.left);
          },
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.group),
            onPressed: () {
              OverlappingPanels.of(context)?.reveal(RevealSide.right);
            },
          )
        ],
      ),
      body: ListView(
        children: [...?widget.channelMessages.data[widget.channelData['id']]]
            .map((message) => ListTile(
                  contentPadding:
                      const EdgeInsets.symmetric(horizontal: 16, vertical: 0),
                  leading: null,  // CircleAvatar(
                    // foregroundImage: NetworkImage(message['author']['user']['profile_picture']),
                  //) TODO: Fix image url issue in backend
                  title: Row(
                    children: [
                      Text(
                        message['author']['nick_name'] ??
                            message['author']['user']['username'],
                        style: const TextStyle(fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(
                        width: 16,
                      ),
                      Text(
                        message['created_at'],
                        style:
                            const TextStyle(color: Colors.grey, fontSize: 12),
                      )
                    ],
                  ),
                  subtitle: Text(
                    message['content'] ?? '3',
                    style: const TextStyle(fontSize: 16),
                  ),
                ))
            .toList(),
      ),
    );
  }
}
