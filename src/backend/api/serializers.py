from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model
from base.models import ChatGroup, Invite, Channel, Member, Message


class UserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("id", "username", "date_joined", "profile_picture")


class MemberSerializer(ModelSerializer):
    user = UserSerializer()
    chat_group_id = serializers.IntegerField(source="chat_group.id")

    class Meta:
        model = Member
        exclude = ("chat_group",)


class ChannelSerializer(ModelSerializer):
    chat_group_id = serializers.SerializerMethodField()

    def get_chat_group_id(self, chat_group):
        return chat_group.id

    class Meta:
        model = Channel
        exclude = ("chat_group",)


class ChatGroupSerializer(ModelSerializer):
    creator = UserSerializer()
    members = MemberSerializer(many=True)
    member_count = serializers.IntegerField(default=1)
    channels = ChannelSerializer(many=True, default=[])
    invite = serializers.SerializerMethodField()

    def get_invite(self, chat_group):
        return InviteSerializer(chat_group.invite).data

    class Meta:
        model = ChatGroup
        fields = "__all__"


class InviteSerializer(ModelSerializer):
    class Meta:
        model = Invite
        fields = ("code", "created_at")


class MessageSerializer(ModelSerializer):
    chat_group = ChannelSerializer(source="chat_group")
    author = MemberSerializer(source="author")
    channel = ChannelSerializer(source="channel")

    class Meta:
        model = Message
        fields = ("id", "content", "created_at", "edited_at", "is_edited")
