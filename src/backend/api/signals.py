from django.db.models.signals import post_save, post_delete
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from django.dispatch import receiver

from .serializers import MessageSerializer, MemberSerializer, ChannelSerializer
from base.models import Message, Channel, Member

channel_layer = get_channel_layer()


@receiver(post_save, sender=Message)
def dispatch_message_create_and_edit(sender, instance, created, **kwargs):
    if created:
        async_to_sync(channel_layer.group_send)(instance.channel.chat_group.channel_name,
                                                {"type": "chat_message_create",
                                                 "payload": MessageSerializer(instance).data})
    else:
        async_to_sync(channel_layer.group_send)(instance.channel.chat_group.channel_name,
                                                {"type": "chat_message_edit",
                                                 "payload": MessageSerializer(instance).data})


@receiver(post_delete, sender=Message)
def dispatch_message_delete(sender, instance, **kwargs):
    async_to_sync(channel_layer.group_send)(instance.channel.chat_group.channel_name,
                                            {"type": "chat_message_delete",
                                             "payload": MessageSerializer(instance).data})


@receiver(post_save, sender=Member)
def dispatch_member_join_and_edit(sender, instance, created, **kwargs):
    payload = MemberSerializer(instance).data

    if created:
        async_to_sync(channel_layer.group_send)(instance.chat_group.channel_name,
                                                {"type": "chat_member_join",
                                                 "payload": payload})

    else:
        async_to_sync(channel_layer.group_send)(instance.chat_group.channel_name,
                                                {"type": "chat_member_update",
                                                 "payload": payload})


@receiver(post_delete, sender=Member)
def dispatch_member_leave(sender, instance, **kwargs):
    async_to_sync(channel_layer.group_send)(instance.chat_group.channel_name,
                                            {"type": "chat_member_leave",
                                             "payload": MemberSerializer(instance).data})


@receiver(post_save, sender=Channel)
def dispatch_channel_create_and_edit(sender, instance, created, **kwargs):
    payload = ChannelSerializer(instance).data

    if created:
        async_to_sync(channel_layer.group_send)(instance.chat_group.channel_name,
                                                {"type": "chat_channel_create",
                                                 "payload": payload})

    else:
        async_to_sync(channel_layer.group_send)(instance.chat_group.channel_name,
                                                {"type": "chat_channel_update",
                                                 "payload": payload})


@receiver(post_delete, sender=Channel)
def dispatch_channel_delete(sender, instance, **kwargs):
    async_to_sync(channel_layer.group_send)(instance.chat_group.channel_name,
                                            {"type": "chat_channel_delete",
                                             "payload": ChannelSerializer(instance).data})
