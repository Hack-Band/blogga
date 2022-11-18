from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from blogga.core.models import BaseModel


class BloggaUser(AbstractBaseUser, PermissionsMixin, BaseModel):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    occupation = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    bio = models.TextField(max_length=255)
    image = models.ImageField(default="")

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]
