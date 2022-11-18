from rest_framework import serializers


class Image(serializers.Serializer):
    image = serializers.ImageField()
    caption = serializers.CharField()
    alt = serializers.CharField()


class OwnerSummary(serializers.Serializer):
    name = serializers.CharField(source="get_full_name")
    image = serializers.ImageField()


class PostList(serializers.Serializer):
    title = serializers.CharField()
    slug = serializers.SlugField()
    excerpt = serializers.CharField()
    image = Image()
    owner = OwnerSummary()
    created_at = serializers.DateTimeField()


class Post(PostList):
    body = serializers.CharField()
