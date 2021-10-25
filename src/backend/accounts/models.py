from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.core.exceptions import ValidationError
from datetime import datetime


def validate_iso_timestamp(data):
    if isinstance(data, datetime):
        return

    try:
        dt_obj = datetime.fromtimestamp(data)
    except ValueError:
        raise ValidationError("%(value)s is an invalid iso string", params={"value": data})

    if dt_obj.tzinfo is None:
        raise ValidationError("%(value)s does not have a timezone specified", params={"value": data})


class CustomUser(AbstractUser):
    username = models.CharField(_("username"), max_length=25)
    email = models.EmailField(_("email address"), unique=True)
    profile_picture = models.ImageField(upload_to="users/profile_pictures", null=True, blank=True)
    date_joined = models.DateTimeField(null=True, validators=(validate_iso_timestamp,))

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("username",)
