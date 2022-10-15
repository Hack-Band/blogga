from blogga.core.models import BaseModel
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

from .managers import BloggaUserManager


class BloggaUser(AbstractBaseUser, PermissionsMixin, BaseModel):
    objects: BloggaUserManager = BloggaUserManager()

    username = models.CharField(max_length=32, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = []

    def __str__(self) -> str:
        return self.username

    @property
    def is_admin(self):
        return self.is_superuser or self.is_staff
