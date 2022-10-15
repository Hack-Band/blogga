from django.contrib.auth.models import BaseUserManager


class BloggaUserManager(BaseUserManager):
    def create_superuser(self, username: str, password: str):
        if not username:
            raise ValueError("Username is required.")

        if not password:
            raise ValueError("Password is required.")

        user = self.model(username=username, is_superuser=True, is_staff=True)
        user.set_password(password)
        user.save(using=self._db)

        return user
