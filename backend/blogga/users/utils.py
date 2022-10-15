from django.utils import timezone


def upload_to(instance, file: str):
    ext = file.split(".")[-1]
    name = f"{instance.username}_{timezone.now()}.{ext}"
    return f"avatars/{name}"
