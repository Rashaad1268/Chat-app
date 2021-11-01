from django.db import models
from django.conf import settings
from django.utils import timezone

User = settings.AUTH_USER_MODEL


class Model(models.Model):
    objects = models.Manager()

    class Meta:
        abstract = True


class ChatGroup(Model):  # Named as ChatGroup to avoid confusion with the built-in Group
    member_set: models.Manager
    channel_set: models.Manager
    role_set: models.Manager

    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=255, null=True, blank=True)
    icon = models.ImageField(upload_to="chatgroup/icons", null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)

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
    def roles(self):
        return self.role_set.all()


class RolePermissions(Model):
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
    create_invite = models.BooleanField(default=True)
    manage_roles = models.BooleanField(default=False)
    kick_members = models.BooleanField(default=False)
    ban_members = models.BooleanField(default=False)
    # This will give the role all of the permissions
    administrator = models.BooleanField(default=False)


class Role(Model):
    chat_group = models.ForeignKey(ChatGroup, on_delete=models.CASCADE)
    name = models.CharField(max_length=25)
    colour = models.CharField(max_length=15, default="#000000", blank=True)
    position = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)
    permissions = models.OneToOneField(RolePermissions, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=("chat_group", "position"),
                name="Unique role position"
            )
        ]


class Member(Model):
    """A member of a ChatGroup"""
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    chat_group = models.ForeignKey(ChatGroup, on_delete=models.CASCADE)
    nick_name = models.CharField(max_length=25, null=True, blank=True)
    roles = models.ManyToManyField(Role)
    joined_at = models.DateTimeField(default=timezone.now)


class Channel(Model):
    """"A channel of a ChatGroup"""
    chat_group = models.ForeignKey(ChatGroup, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=255, null=True, blank=True)
    position = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=("chat_group", "position"),
                name="Unique channel position"
            )
        ]


class Message(Model):
    """"A message being sent by a member to a channel"""
    author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE)
    content = models.TextField(max_length=1000)
    created_at = models.DateTimeField(default=timezone.now)
    edited_at = models.DateTimeField(default=timezone.now, null=True, blank=True)
