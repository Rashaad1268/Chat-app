from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model

from base.models import ChatGroup, Channel
from .serializers import UserSerializer, MemberSerializer


User = get_user_model()


class ChatGroupCreateSerializer(ModelSerializer):

    class Meta:
        model = ChatGroup
        fields = ("creator", "name", "description", "icon")

    def create(self, data):
        return ChatGroup.objects.create(creator_id=data.pop("creator"), **data)


class ChannelCreate(ModelSerializer):

    class Meta:
        model = Channel
        fields = ("chat_group", "name", "description", "position")

    def create(self, data):
        return Channel.objects.create(chat_group_id=data.pop("chat_group"), **data)
