from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


class CustomUser(AbstractUser):
    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True)
    username = models.CharField("username", max_length=25)
    email = models.EmailField("email address", unique=True)
    profile_picture = models.ImageField(upload_to="users/profile_pictures", null=True, blank=True)
    is_online = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("username",)
