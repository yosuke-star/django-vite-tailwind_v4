from django.urls import path
from . import views

urlpatterns = [
    path("hello_view/", views.hello_view, name="hello_view"),
]
