from django.contrib import admin
from django.core.paginator import Paginator
from django.core.cache import cache
from .models import ChatGroup, Invite, Channel, Member, Message, Role, RolePermissions


# Source: http://masnun.rocks/2017/03/20/django-admin-expensive-count-all-queries/
class CachingPaginator(Paginator):
    def _get_count(self):

        if not hasattr(self, "_count"):
            self._count = None

        if self._count is None:
            try:
                key = "adm:{0}:count".format(hash(self.object_list.query.__str__()))
                self._count = cache.get(key, -1)
                if self._count == -1:
                    self._count = super().count
                    cache.set(key, self._count, 3600)

            except:
                self._count = len(self.object_list)
        return self._count

    count = property(_get_count)


class ModelAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at")
    search_fields = ("id", "name")


class MemberAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "chat_group_name")
    search_fields = ("name", "chat_group_name")

    @admin.display
    def chat_group_name(self, member):
        return member.chat_group.name

    @admin.display
    def name(self, member):
        return member.nick_name or member.user.username


class MessageAdmin(admin.ModelAdmin):
    list_display = ("id", "author_name", "channel_name")
    search_fields = ("id", "content", "author__name", "channel__name")
    show_full_result_count = False
    paginator = CachingPaginator

    @admin.display
    def author_name(self, message):
        return message.author.nick_name or message.author.user.username

    @admin.display
    def channel_name(self, message):
        return message.channel.name


admin.site.register(ChatGroup, ModelAdmin)
admin.site.register(Channel, ModelAdmin)
admin.site.register(Member, MemberAdmin)
admin.site.register(Message, MessageAdmin)
admin.site.register(Role, ModelAdmin)
admin.site.register(RolePermissions)
admin.site.register(Invite)
