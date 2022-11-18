from django.contrib.auth.models import BaseUserManager


class BloggaUserManager(BaseUserManager):
    def create_superuser(self, email: str, password: str, **kwargs):
        kwargs["is_staff"] = True
        kwargs["is_superuser"] = True

        if not email:
            raise ValueError("Email is required")
        if not password:
            raise ValueError("Password is required")

        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save(using=self._db)

        return user
