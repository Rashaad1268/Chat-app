from django.db import models
from django.conf import settings
from .validators import validate_iso_timestamp

User = settings.AUTH_USER_MODEL
validate_ts = (validate_iso_timestamp,)


class Model(models.Model):
    objects = models.Manager()

    class Meta:
        abstract = True


class ChatGroup(Model):  # Named as ChatGroup to avoid confusion with the built-in Group
    member_set: models.Manager
    channel_set: models.Manager

    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=255, null=True, blank=True)
    icon = models.ImageField(upload_to="chatgroup/icons", null=True, blank=True)
    created_at = models.DateTimeField(validators=validate_ts)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        Member.objects.create(user=self.creator, chat_group=self, joined_at=self.created_at)

    @property
    def members(self):
        return self.member_set.all()

    @property
    def member_count(self):
        return self.members.count()

    @property
    def channels(self):
        return self.channel_set.all()

    @property
    def channel_count(self):
        return self.channels.count()


class Member(Model):
    """A member of a ChatGroup"""
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    chat_group = models.ForeignKey(ChatGroup, on_delete=models.CASCADE)
    nick_name = models.CharField(max_length=25, null=True, blank=True)
    joined_at = models.DateTimeField(validators=validate_ts)


class Channel(Model):
    """"A channel of a ChatGroup"""
    chat_group = models.ForeignKey(ChatGroup, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=255, null=True, blank=True)
    position = models.IntegerField()
    created_at = models.DateTimeField(validators=validate_ts)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=("chat_group", "position"),
                name="Unique position"
            )
        ]


class Message(Model):
    """"A message being sent by a member to a channel"""
    author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE)
    content = models.TextField(max_length=1000)
    created_at = models.DateTimeField(validators=validate_ts)
    edited_at = models.DateTimeField(validators=validate_ts, null=True, blank=True)
    is_edited = models.BooleanField(default=False, blank=True)
