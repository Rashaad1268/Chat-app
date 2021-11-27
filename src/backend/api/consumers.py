import json
from channels.generic.websocket import WebsocketConsumer

from api.serializers import UserSerializer


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        user = self.scope["user"]
        if not user.is_anonymous:
            self.channel_name = f"User({user.id})"
            self.accept()
            self.send(text_data=json.dumps(UserSerializer(user).data))
        else:
            self.close()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        data = json.loads(text_data)

    def chat_message_send(self, event):
        self.send(text_data=json.dumps(event["message"]))

    def chat_message_delete(self, event):
        self.send(text_data=json.dumps(event["message"]))

    def chat_message_edit(self, event):
        self.send(text_data=json.dumps(event["message"]))
