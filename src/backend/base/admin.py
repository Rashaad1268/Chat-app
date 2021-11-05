from django.contrib import admin
from .models import ChatGroup, Invite, Channel, Member, Message, Role, RolePermissions


class ModelAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at")


class MemberAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "chat_group_name")

    @admin.display
    def chat_group_name(self, member):
        return member.chat_group.name

    @admin.display
    def name(self, member):
        return member.nick_name or member.user.username


class MessageAdmin(admin.ModelAdmin):
    list_display = ("id", "author_name", "channel_name")

    @admin.display
    def author_name(self, message):
        return message.author.nick_name or message.author.user.username

    @admin.display
    def channel_name(self, channel):
        return channel.name


class RoleAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at")


admin.site.register(ChatGroup, ModelAdmin)
admin.site.register(Channel, ModelAdmin)
admin.site.register(Member, MemberAdmin)
admin.site.register(Message, MessageAdmin)
admin.site.register(Role, RoleAdmin)
admin.site.register(RolePermissions)
admin.site.register(Invite)
