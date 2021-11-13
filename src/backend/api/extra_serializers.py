from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model

from base.models import ChatGroup, Channel
from .serializers import UserSerializer, MemberSerializer


User = get_user_model()


class ChatGroupCreateSerializer(ModelSerializer):

    class Meta:
        model = ChatGroup
        fields = ("creator", "name", "description", "icon")


class ChannelCreateSerializer(ModelSerializer):

    class Meta:
        model = Channel
        fields = ("chat_group", "name", "description", "position")
