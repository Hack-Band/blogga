# Generated by Django 4.1.2 on 2022-11-18 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blogga_blog", "0002_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="post",
            name="is_featured",
            field=models.BooleanField(default=False),
        ),
    ]