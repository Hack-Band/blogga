from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.views import View
from django.views.generic import TemplateView


class LoginPage(TemplateView):
    template_name = "cms/login.html"

    def post(self, request):
        email = request.POST.get("email")
        password = request.POST.get("password")
        next = request.GET.get("next")
        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            if next:
                return redirect(next)
            return redirect("cms:dashboard")

        print("invalid login details")
        return redirect("cms:login")


class DashboardPage(LoginRequiredMixin, TemplateView):
    template_name = "cms/dashboard.html"


class LogoutPage(LoginRequiredMixin, View):
    def post(self, request):
        logout(request)
        return redirect("cms:login")
