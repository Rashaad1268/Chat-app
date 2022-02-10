from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model

from base.models import ChatGroup, Channel, Message, Role
from .serializers import UserSerializer, MemberSerializer


User = get_user_model()


class ChatGroupCreateSerializer(ModelSerializer):

    class Meta:
        model = ChatGroup
        fields = ("creator", "name", "description", "icon")


class RoleCreateSerializer(ModelSerializer):
    position = serializers.IntegerField(read_only=True)
    permissions = serializers.DictField(child=serializers.BooleanField(), allow_empty=True)

    class Meta:
        model = Role
        fields = ("__all__",)


class ChannelCreateSerializer(ModelSerializer):

    class Meta:
        model = Channel
        exclude = ("id", "created_at")


class MessageCreateSerializer(ModelSerializer):
    class Meta:
        model = Message
        fields = ("author", "channel", "content")
