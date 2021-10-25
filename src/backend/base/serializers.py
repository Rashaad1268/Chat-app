from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import ChatGroup, Channel, Member, Message


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("id", "username", "date_joined", "profile_picture")


class MemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(source="user")
    chat_group_id = serializers.IntegerField(source="chat_group.id")

    class Meta:
        model = Member
        fields = ("id", "nick_name", "joined_at")


class ChannelSerializer(serializers.ModelSerializer):
    chat_group_id = serializers.IntegerField(source="chat_group.id")

    class Meta:
        model = Channel
        fields = ("id", "name", "description", "position", "created_at")


class MessageSerializer(serializers.ModelSerializer):
    author = MemberSerializer(source="author")
    channel = ChannelSerializer(source="channel")
    chat_group_id = serializers.IntegerField(source="channel.chat_group.id")

    class Meta:
        model = Message
        fields = ("id", "content", "created_at", "edited_at", "is_edited")


class ChatGroupSerializer(serializers.ModelSerializer):
    creator = UserSerializer(source="creator")
    members = MemberSerializer(source="members", many=True)
    member_count = serializers.IntegerField(source="member_count")
    channels = ChannelSerializer(source="channels", many=True)
    channel_count = serializers.IntegerField(source="channel_count")

    class Meta:
        model = ChatGroup
        fields = ("id", "name", "description", "icon", "created_at")
