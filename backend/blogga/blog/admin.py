from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register

from .models import Post


class PostAdmin(ModelAdmin):
    """
    Manage Blog posts.
    """

    model = Post
    menu_label = "Posts"
    menu_icon = ""
    menu_order = 200
    add_to_settings_menu = False
    exclude_from_explorer = False
    list_display = ("title", "author", "created_at")
    search_fields = ("title", "slug", "author", "content")


modeladmin_register(PostAdmin)
