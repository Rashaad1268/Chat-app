from rest_framework import serializers
from rest_framework.serializers import Serializer, ModelSerializer
from django.contrib.auth import get_user_model

from .models import ChatGroup
from .serializers import UserSerializer


User = get_user_model()


class ChatGroupCreateSerializer(ModelSerializer):
    creator = UserSerializer()

    class Meta:
        model = ChatGroup
        fields = ("creator", "name", "description", "icon")
