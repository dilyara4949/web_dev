from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse

from .models import Company, Vacancy
# Create your views here.


def home(request):
    return HttpResponse('home page')