from rest_framework.response import Response
from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from django.contrib.auth import get_user_model

from .serializers import UserSerializer, ChannelSerializer, ChatGroupSerializer, MemberSerializer, MessageSerializer
from .models import ChatGroup, Channel, Member, Message


User = get_user_model()


class UserViewSet(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=("GET",), detail=False, url_path="@me")
    def my_profile(self, request):
        return Response(self.get_serializer(instance=request.user).data)

    def retrieve(self, request, pk):
        return Response(self.get_serializer(instance=User.objects.get(pk=pk)).data)
