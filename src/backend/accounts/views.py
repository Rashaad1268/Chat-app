from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import generics, permissions, status, mixins, viewsets
from django.contrib.auth import get_user_model

from .serializers import UserSerializer, SignupSerializer


User = get_user_model()


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {"refresh": str(refresh), "access": str(refresh.access_token)}


class SignupView(generics.GenericAPIView):
    serializer_class = SignupSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(
            {"username": user.username, "email": user.email, "tokens": get_tokens_for_user(user)}
        )


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
