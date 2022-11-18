from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from blogga.core.models import BaseModel

from .managers import BloggaUserManager


class BloggaUser(AbstractBaseUser, PermissionsMixin, BaseModel):
    objects = BloggaUserManager()

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    image = models.ImageField(default="")

    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    def save(self, *args, **kwargs):
        if not self.first_name.istitle():
            self.first_name = self.first_name.title()
        if not self.last_name.istitle():
            self.last_name = self.last_name.title()
        if not self.occupation.istitle():
            self.occupation = self.occupation.title()

        return super().save(*args, **kwargs)

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"

    def is_admin(self):
        return self.is_staff or self.is_superuser
