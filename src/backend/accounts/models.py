from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
import uuid


class CustomUser(AbstractUser):
    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True)
    username = models.CharField(_("username"), max_length=25)
    email = models.EmailField(_("email address"), unique=True)
    profile_picture = models.ImageField(upload_to="users/profile_pictures", null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("username",)
