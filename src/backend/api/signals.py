from django.db.models.signals import post_save, post_delete
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from django.dispatch import receiver

from .serializers import MessageSerializer
from base.models import Message, Channel, Member


channel_layer = get_channel_layer()


@receiver(post_save, sender=Message)
def dispatch_message_create(sender, instance, created, **kwargs):
    if created:
        async_to_sync(channel_layer.group_send)(instance.channel.chat_group.channel_name,
                                                {"type": "chat_message_create",
                                                 "payload": MessageSerializer(instance).data})


@receiver(post_save, sender=Message)
def dispatch_message_edit(sender, instance, created, **kwargs):
    if not created:
        async_to_sync(channel_layer.group_send)(instance.channel.chat_group.channel_name,
                                                {"type": "chat_message_edit",
                                                 "payload": MessageSerializer(instance).data})


@receiver(post_delete, sender=Message)
def dispatch_message_delete(sender, instance, **kwargs):
    async_to_sync(channel_layer.group_send)(instance.channel.chat_group.channel_name,
                                            {"type": "chat_message_delete",
                                             "payload": MessageSerializer(instance).data})
