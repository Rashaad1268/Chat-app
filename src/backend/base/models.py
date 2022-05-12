import datetime
from email.policy import default

from django.db import models
from django.conf import settings
import uuid

from django.db.models.expressions import RawSQL

from .utils import generate_invite

User = settings.AUTH_USER_MODEL


class Model(models.Model):
    objects = models.Manager()

    class Meta:
        abstract = True


class ChatGroup(Model):  # Named as ChatGroup to avoid confusion with the built-in Group
    member_set: models.Manager
    channel_set: models.Manager
    role_set: models.Manager

    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=255, null=True, blank=True)
    icon = models.ImageField(upload_to="chatgroup/icons", default="../static/images/default_group_icon.png", null=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def channel_name(self):
        """The channel name used when dispatching an event"""
        return f"ChatGroup-{self.id}"

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
    def roles(self):
        return self.role_set.all()


class Invite(Model):
    chat_group = models.OneToOneField(ChatGroup, on_delete=models.CASCADE)
    code = models.CharField(max_length=8, default=generate_invite, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.code


class RolePermissions(Model):
    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True)
    # Message related
    read_messages = models.BooleanField(default=True)
    send_messages = models.BooleanField(default=True)
    delete_messages = models.BooleanField(default=False)
    # Channel related
    create_channels = models.BooleanField(default=False)
    delete_channels = models.BooleanField(default=False)
    edit_channels = models.BooleanField(default=False)
    # ChatGroup related
    manage_group = models.BooleanField(default=False)
    manage_roles = models.BooleanField(default=False)
    kick_members = models.BooleanField(default=False)
    ban_members = models.BooleanField(default=False)
    # This will give the role all of the permissions
    administrator = models.BooleanField(default=False)


class Role(Model):
    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True)
    chat_group = models.ForeignKey(ChatGroup, on_delete=models.CASCADE)
    name = models.CharField(max_length=25)
    colour = models.CharField(max_length=15, default="#000000", blank=True)
    position = models.PositiveIntegerField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    permissions = models.OneToOneField(RolePermissions, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        # TODO: Fix IntegrityError for position column
        if not self._state.adding:
            self.position = self.objects.raw(
                "SELECT COALESCE(MAX(position), 0) + 1 FROM base_role WHERE chat_group_id='38f395db-796a-4198-817a-d41451f0c9f4'",
                self.chat_group.id
            )
        print(self.chat_group.id)
        print(self.position)
        super().save(*args, **kwargs)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=("chat_group", "position"), name="Unique role position"
            )
        ]


class Member(Model):
    """A member of a ChatGroup"""

    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    chat_group = models.ForeignKey(ChatGroup, on_delete=models.CASCADE)
    nick_name = models.CharField(max_length=25, null=True, blank=True)
    roles = models.ManyToManyField(Role, blank=True)
    joined_at = models.DateTimeField(auto_now_add=True)


class Channel(Model):
    """A channel of a ChatGroup"""

    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True)
    chat_group = models.ForeignKey(ChatGroup, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=255, null=True, blank=True)
    position = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def group_name(self):
        return f"ChatChannel-{self.id}"

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=("chat_group", "position"), name="Unique channel position"
            )
        ]


class Message(Model):
    """A message being sent by a member to a channel"""

    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True)
    author = models.ForeignKey(Member, null=True, on_delete=models.SET_NULL)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE)
    content = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self._state.adding:
            self.edited_at = datetime.datetime.utcnow()

        super().save(*args, **kwargs)
