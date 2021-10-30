from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model, authenticate

User = get_user_model()


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {"refresh": str(refresh), "access": str(refresh.access_token)}


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "date_joined", "profile_picture")


class SignupSerializer(serializers.ModelSerializer):
    tokens = serializers.SerializerMethodField()

    def get_tokens(self, user):
        return get_tokens_for_user(user)

    class Meta:
        model = User
        fields = ("id", "username", "email", "tokens", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, user_data):
        return User.objects.create_user(user_data["username"], user_data["email"], user_data["password"])


class TokenObtainSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        user = authenticate(**attrs)

        if user is None:
            raise serializers.ValidationError("Account with the given credentials does not exist.")
        data = UserSerializer(instance=user).data
        data["tokens"] = get_tokens_for_user(user)
        return data
