from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    #return render(request,"portfolio/index.html")
    return render(request,"portfolio/test.html")
