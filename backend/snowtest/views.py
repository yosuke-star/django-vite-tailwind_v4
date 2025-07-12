from django.shortcuts import render
from django.conf import settings

def hello_view(request):
    print("BASE_DIR", settings.BASE_DIR)
    return render(request, "snowtest/hello.html")