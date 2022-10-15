from django.contrib import admin

from .models import BloggaUser


class BloggaUserAdmin(admin.ModelAdmin):
    list_display = ("username", "created_at")
    list_display_links = None
