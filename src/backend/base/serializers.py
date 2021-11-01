from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import ChatGroup, Channel, Member, Message


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("id", "username", "date_joined", "profile_picture")


class MemberSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    chat_group_id = serializers.IntegerField(source="chat_group.id")

    class Meta:
        model = Member
        exclude = ("chat_group",)


class ChannelSerializer(serializers.ModelSerializer):
    chat_group_id = serializers.SerializerMethodField()

    def get_chat_group_id(self, chat_group):
        return chat_group.id

    class Meta:
        model = Channel
        exclude = ("chat_group",)


class ChatGroupSerializer(serializers.ModelSerializer):
    creator = UserSerializer()
    members = MemberSerializer(many=True)
    member_count = serializers.IntegerField(default=1)
    channels = ChannelSerializer(many=True, default=[])

    class Meta:
        model = ChatGroup
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    chat_group = ChannelSerializer(source="chat_group")
    author = MemberSerializer(source="author")
    channel = ChannelSerializer(source="channel")

    class Meta:
        model = Message
        fields = ("id", "content", "created_at", "edited_at", "is_edited")


