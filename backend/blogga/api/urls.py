from django.urls import include, path

app_name = "api"

urlpatterns = [
    path("posts/", include("blogga.blog.urls", "blog")),
]
