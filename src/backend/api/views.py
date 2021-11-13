from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.decorators import action


from .serializers import UserSerializer, ChannelSerializer, ChatGroupSerializer, MemberSerializer, InviteSerializer, MessageSerializer
from base.models import ChatGroup, Invite, Channel, Member, Message
from .extra_serializers import ChatGroupCreateSerializer


User = get_user_model()


class ChatGroupViewSet(viewsets.ModelViewSet):
    serializer_class = ChatGroupSerializer

    def get_queryset(self):
        return ChatGroup.objects.filter(member__user__id=self.request.user.id)

    def create(self, request, *args, **kwargs):
        data = request.data
        data["creator"] = UserSerializer(request.user).data
        serializer = ChatGroupCreateSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
