from blogga.core.models import BaseModel
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(BaseModel):
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    author = models.ForeignKey(to=User, on_delete=models.PROTECT)

    class Meta:
        pass
