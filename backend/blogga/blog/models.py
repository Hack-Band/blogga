from django.db import models

from blogga.core.models import BaseModel
from blogga.users.models import BloggaUser


class Image(BaseModel):
    image = models.ImageField()
    caption = models.CharField(max_length=50)
    alt = models.CharField(max_length=50)


class Post(BaseModel):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    owner = models.ForeignKey(to=BloggaUser, on_delete=models.PROTECT)
    excerpt = models.TextField(max_length=255)
    body = models.TextField()
    image = models.ForeignKey(to=Image, on_delete=models.PROTECT)
    is_featured = models.BooleanField(default=False)
