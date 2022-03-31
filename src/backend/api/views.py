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
    MessageSerializer, RoleSerializer,
)
from base.models import ChatGroup, Invite, Channel, Member, Message
from .extra_serializers import ChatGroupCreateSerializer, MessageCreateSerializer, RoleCreateSerializer

User = get_user_model()


class NoListViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
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

    @action(detail=True, url_name="accept-invite/")
    def accept_invite(self, request, invite_code):
        invite = get_object_or_404(Invite, code=invite_code)
        user = request.user
        member, created = Member.objects.get_or_create(id=user.id, user=user, chat_group=invite.chat_group)
        return Response(MemberSerializer(member).data)

    @action(detail=True, url_name="create-role/", methods=("POST",))
    def create_role(self, request, chat_group_id):
        if isinstance(request.data, dict):
            request.data["chat_group"] = chat_group_id
        serializer = RoleCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    @action(detail=True, url_name="leave/", methods=("GET",))
    def leave_chat_group(self, request, chat_group_id):
        member = get_object_or_404(ChatGroup, user=request.user, chat_group__id=chat_group_id)
        member.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class ChannelViewSet(NoListViewSet):
    serializer_class = ChannelSerializer

    def get_queryset(self):
        return Channel.objects.filter(chat_group__member__user__id=self.request.user.id)


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.filter(channel__id=self.kwargs["channel_pk"])

    def create(self, request, channel_pk):
        if not isinstance(request.data, dict):
            return Response({"message": "Invalid POST data"}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
        data = dict(**request.data)
        data["author"] = request.user.id
        data["channel"] = channel_pk
        serializer = MessageCreateSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        message = serializer.save()
        return Response(MessageSerializer(instance=message).data)

    def list(self, request, channel_pk):
        start = request.query_params.get("start", 0)
        stop = request.query_params.get("stop", 50)  # By default return the last 50 messages

        try:
            start = int(start)
            stop = int(stop)
        except ValueError:
            return Response({"message": "Invalid query parameters"}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        return Response(MessageSerializer(self.get_queryset()[start:stop], many=True).data)
