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

    class Meta:
        model = Member
        exclude = ("id",)


class ChannelSerializer(ModelSerializer):
    class Meta:
        model = Channel
        fields = "__all__"


class InviteSerializer(ModelSerializer):
    class Meta:
        model = Invite
        fields = ("code", "created_at")


class ChatGroupSerializer(ModelSerializer):
    members = MemberSerializer(many=True)
    channels = ChannelSerializer(many=True)
    invite = InviteSerializer()

    class Meta:
        model = ChatGroup
        fields = "__all__"


class MessageSerializer(ModelSerializer):
    author = MemberSerializer()

    class Meta:
        model = Message
        fields = "__all__"
