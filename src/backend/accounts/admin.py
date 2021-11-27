from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    readonly_fields = ("date_joined",)


admin.site.register(CustomUser, CustomUserAdmin)
