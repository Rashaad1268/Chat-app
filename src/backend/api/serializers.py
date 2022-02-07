from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from base.models import ChatGroup, Invite, Channel, Member, Message


class UserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("id", "username", "date_joined", "is_online", "profile_picture")


class MemberSerializer(ModelSerializer):
    user = UserSerializer()
    chat_group = serializers.PrimaryKeyRelatedField(allow_null=False,
                                                    read_only=True,
                                                    pk_field=serializers.UUIDField(format='hex_verbose'))

    class Meta:
        model = Member
        exclude = ("id",)


class ChannelSerializer(ModelSerializer):
    chat_group = serializers.PrimaryKeyRelatedField(allow_null=False,
                                                    read_only=True,
                                                    pk_field=serializers.UUIDField(format='hex_verbose'))

    class Meta:
        model = Channel
        fields = "__all__"


class InviteSerializer(ModelSerializer):
    class Meta:
        model = Invite
        fields = ("code", "created_at")


class ChatGroupSerializer(ModelSerializer):
    id = serializers.SerializerMethodField()
    creator = UserSerializer()
    members = MemberSerializer(many=True)
    channels = ChannelSerializer(many=True)
    invite = InviteSerializer()

    class Meta:
        model = ChatGroup
        fields = "__all__"

    def get_id(self, chat_group):
        return str(chat_group.id)


class MessageSerializer(ModelSerializer):
    author = serializers.SerializerMethodField()
    channel = serializers.SerializerMethodField()
    chat_group = serializers.PrimaryKeyRelatedField(allow_null=False,
                                                    read_only=True,
                                                    pk_field=serializers.UUIDField(format='hex_verbose'))

    def get_author(self, message):
        return MemberSerializer(message.author).data

    def get_channel(self, message):
        return ChannelSerializer(message.channel).data

    class Meta:
        model = Message
        fields = "__all__"
