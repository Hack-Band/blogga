from django.urls import path

from . import views

app_name = "cms"

urlpatterns = [
    path("", views.DashboardPage.as_view(), name="dashboard"),
    path("login/", views.LoginPage.as_view(), name="login"),
]
