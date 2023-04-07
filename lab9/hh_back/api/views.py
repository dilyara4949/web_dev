from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse

from .models import Company, Vacancy
# Create your views here.


def home(request):
    return HttpResponse('home page')

#

def company_list(request):
    return JsonResponse(list(Company.objects.values()), safe=False,json_dumps_params={'indent' : 2})


def company(request, id):
    try:
        c = Company.objects.get(pk=id)
        return JsonResponse(c.to_json(), safe=False,json_dumps_params={'indent' : 2})
    except:
        return JsonResponse({'error': 'Company not found'})



    # path('companies/', views.company_list),
    # path('companies/<int:id>/', views.company),
    # path('companies/<int:id>/vacancies/', views.company_vacancy),
    # path('vacancies/', views.vacancy_list),
    # path('vacancies/<int:id>/', views.vacancy),
    # path('vacancies/top_ten/', views.vacancies_top),
