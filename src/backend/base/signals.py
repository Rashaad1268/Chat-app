from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import ChatGroup, Invite, Member, Channel


@receiver(post_save, sender=ChatGroup)
def create_chat_group(sender, instance, created, **kwargs):
    """Creates a Channel, Invite, Member object when a ChatGroup is created"""
    if created:
        Channel.objects.create(chat_group=instance, name="General", position=0)
        Invite.objects.create(chat_group=instance)
        Member.objects.create(id=instance.creator.id, user=instance.creator, chat_group=instance)
