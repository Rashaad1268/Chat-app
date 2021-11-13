from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets, status, mixins
from rest_framework.decorators import action


from .serializers import (
    UserSerializer,
    ChannelSerializer,
    ChatGroupSerializer,
    MemberSerializer,
    InviteSerializer,
    MessageSerializer,
)
from base.models import ChatGroup, Invite, Channel, Member, Message
from .extra_serializers import ChatGroupCreateSerializer, MessageCreateSerializer


User = get_user_model()


class NoListViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    mixins.ListModelMixin,
    viewsets.GenericViewSet,
):
    pass


class ChatGroupViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return ChatGroup.objects.filter(member__user__id=self.request.user.id)

    def get_serializer_class(self):
        if self.request.method in ("POST", "PATCH", "PUT"):
            return ChatGroupCreateSerializer
        else:
            return ChatGroupSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data={**request.data, "creator": request.user.id})
        serializer.is_valid(raise_exception=True)
        chat_group = serializer.save()
        return Response(ChatGroupSerializer(chat_group).data)


class ChannelViewSet(NoListViewSet):
    serializer_class = ChannelSerializer

    def get_queryset(self):
        return Channel.objects.filter(chat_group__member__user__id=self.request.user.id)

    @action(detail=True, methods=("GET",))
    def messages(self, request, pk):
        queryset = Message.objects.filter(channel__pk=pk).order_by("-created_at")[:51]
        # Return the most recent 50 messages sent in the channel
        return Response(MessageSerializer(queryset, many=True).data)

    @messages.mapping.post
    def post_message(self, request, pk):
        channel = get_object_or_404(Channel, pk=pk)
        data = dict(**request.data)
        data["author"] = request.user.id
        data["channel"] = channel.id
        serializer = MessageCreateSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        message = serializer.save()
        return Response(MessageSerializer(message).data)
