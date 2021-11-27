from django.db.models.signals import post_save, post_delete
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from django.dispatch import receiver

from .serializers import MessageSerializer
from base.models import Message, Channel


@receiver(post_save, sender=Message)
def new_message(sender, instance, created, **kwargs):
    channel_layer = get_channel_layer()

    if created:
        chat_group = instance.chat_group
        for member in chat_group.members:
            ...


