# Generated by Django 4.1.2 on 2022-11-18 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blogga_users", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="bloggauser",
            name="is_staff",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="bloggauser",
            name="is_superuser",
            field=models.BooleanField(default=False),
        ),
    ]