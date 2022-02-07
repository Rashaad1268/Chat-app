from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    readonly_fields = ("date_joined",)
    list_display = UserAdmin.list_display + ("is_online",)
    list_filter = UserAdmin.list_filter + ("is_online",)
    add_fieldsets = UserAdmin.add_fieldsets + (
        ("Custom fields", {
            "fields": ("is_online",),
        }),
    )


admin.site.register(CustomUser, CustomUserAdmin)
