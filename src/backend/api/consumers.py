import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

from base.models import ChatGroup
from .serializers import UserSerializer, ChatGroupSerializer


def full_user_profile_data(user, *, chat_groups_key="chat_groups"):
    user_data = UserSerializer(user).data
    chat_groups_data = ChatGroupSerializer(ChatGroup.objects.filter(member__user__id=user.id), many=True).data

    return {**user_data, chat_groups_key: chat_groups_data}


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        user = self.scope["user"]
        if not user.is_anonymous:
            self.accept()
            user.is_online = True
            user.save()
            self.dispatch_named_event("READY", full_user_profile_data(user))

            for chat_group in ChatGroup.objects.filter(member__user__id=user.id):
                async_to_sync(self.channel_layer.group_add)(
                    chat_group.channel_name,
                    self.channel_name
                )

        else:
            self.close()

    def disconnect(self, close_code):
        for chat_group in ChatGroup.objects.filter(member__user__id=self.scope["user"].id):
            async_to_sync(self.channel_layer.group_add)(
                chat_group.channel_name,
                self.channel_name
            )
        self.scope["user"].is_online = False
        self.scope["user"].save()

    def dispatch_named_event(self, event_name, payload, extra_params={}):
        """A helper function to dispatch an event with a name specified"""

        data = {
            "event": event_name.upper(),
            "payload": payload,
            **extra_params
        }
        self.send(text_data=json.dumps(data))

    def chat_message_create(self, event):
        self.dispatch_named_event("MESSAGE_CREATE", event["payload"])

    def chat_message_delete(self, event):
        self.dispatch_named_event("MESSAGE_DELETE", event["payload"])

    def chat_message_edit(self, event):
        self.dispatch_named_event("MESSAGE_UPDATE", event["payload"])

    def chat_member_join(self, event):
        self.dispatch_named_event("MEMBER_JOIN", event["payload"])

    def chat_member_update(self, event):
        self.dispatch_named_event("MEMBER_UPDATE", event["payload"])

    def chat_member_leave(self, event):
        self.dispatch_named_event("MEMBER_LEAVE", event["payload"])

    def chat_channel_create(self, event):
        self.dispatch_named_event("CHANNEL_CREATE", event["payload"])

    def chat_channel_update(self, event):
        self.dispatch_named_event("CHANNEL_UPDATE", event["payload"])

    def chat_channel_delete(self, event):
        self.dispatch_named_event("CHANNEL_DELETE", event["payload"])
