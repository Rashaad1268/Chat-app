from rest_framework.response import Response
from rest_framework import viewsets, status
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from .serializers import UserSerializer, ChannelSerializer, ChatGroupSerializer, MemberSerializer, MessageSerializer
from .models import ChatGroup, Channel, Member, Message

User = get_user_model()


class ChatGroupViewSet(viewsets.ModelViewSet):
    serializer_class = ChatGroupSerializer
    REQUIRED_FIELDS = {"name", "description"}
    ALL_EDITABLE_FIELDS = {"name", "description", "icon"}

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
        REQUIRED_FIELDS = self.REQUIRED_FIELDS
        if REQUIRED_FIELDS & set(request.data) != REQUIRED_FIELDS:
            return Response(
                {"detail": f"Required fields not supplied ({', '.join(REQUIRED_FIELDS - set(request.data))})"},
                status=status.HTTP_400_BAD_REQUEST)
        icon = request.FILES.get("icon")
        data = request.data
        chat_group = ChatGroup.objects.create(name=data["name"], description=data["description"], creator=request.user,
                                              icon=icon)
        return Response(self.get_serializer(instance=chat_group).data)

    def partial_update(self, request, pk):
        chat_group = self.get_chat_group(pk=pk)
        for key, value in request.data.items():
            if key in self.ALL_EDITABLE_FIELDS:
                setattr(chat_group, key, value)

        chat_group.save(force_update=True)
        return Response(self.get_serializer(instance=chat_group).data)
