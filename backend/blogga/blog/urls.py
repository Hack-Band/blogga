from django.urls import path

from . import views

app_name = "blog"

urlpatterns = [
    path("", views.PostList.as_view(), name="multiple"),
    path("<slug:slug>/", views.PostGet.as_view(), name="single"),
]
