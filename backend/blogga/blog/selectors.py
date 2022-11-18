from rest_framework.exceptions import NotFound

from .models import Post


def post_list(**kwargs):
    return Post.objects.filter(**kwargs)


def post_get(slug: str):
    try:
        return Post.objects.get(slug=slug)
    except Post.DoesNotExist:
        raise NotFound("Post not found.")
