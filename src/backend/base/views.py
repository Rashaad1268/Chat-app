from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.decorators import action


from .serializers import UserSerializer, ChannelSerializer, ChatGroupSerializer, MemberSerializer, InviteSerializer, MessageSerializer
from .models import ChatGroup, Invite, Channel, Member, Message
from .extra_serializers import ChatGroupCreateSerializer


User = get_user_model()


class ChatGroupViewSet(viewsets.ModelViewSet):
    serializer_class = ChatGroupSerializer

    def get_queryset(self):
        for member in self.request.user.member_set.all():
            yield member.chat_group

    def get_chat_group(self, *args, **kwargs):
        return get_object_or_404(ChatGroup, *args, **kwargs)

    def retrieve(self, request, pk):
        chat_group = self.get_chat_group(pk=pk)
        return Response(self.get_serializer(instance=chat_group).data)

    def destroy(self, request, pk):
        chat_group = self.get_chat_group(pk=pk)
        if request.user.id == chat_group.creator.id:
            chat_group.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_403_FORBIDDEN)

    def create(self, request):
        data = {**request.data, "creator": UserSerializer(request.user).data}
        serializer = ChatGroupCreateSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        chat_group = serializer.save()
        return Response(self.get_serializer(instance=chat_group).data)
