from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import generics, permissions, status, mixins, viewsets
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model

from .serializers import UserSerializer, SignupSerializer, TokenObtainSerializer

User = get_user_model()


class SignupView(generics.GenericAPIView):
    serializer_class = SignupSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = TokenObtainSerializer


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
