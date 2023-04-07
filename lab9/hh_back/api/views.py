from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse

from .models import Company, Vacancy
# Create your views here.


def home(request):
    return HttpResponse('home page')

#

def company_list(request):
    return JsonResponse(list(Company.objects.values()), safe=False,json_dumps_params={'indent' : 2})
def vacancy_list(request):
    return JsonResponse(list(Vacancy.objects.values()), safe=False,json_dumps_params={'indent' : 2})

def company(request, id):
    try:
        c = Company.objects.get(pk=id)
        return JsonResponse(c.to_json(), safe=False,json_dumps_params={'indent' : 2})
    except:
        return JsonResponse({'error': 'Company not found'})


def vacancy(request, id):
    try:
        v = Vacancy.objects.get(pk=id)
        return JsonResponse(v.to_json(), safe=False,json_dumps_params={'indent' : 2})
    except:
        return JsonResponse({'error': 'Vacancy not found'})


def company_vacancy(request, id):
    vac = Vacancy.objects.filter(company=id)
    v_json = [v.to_json() for v in vac]
    return JsonResponse(v_json, safe=False,json_dumps_params={'indent' : 2})


def vacancies_top(request):
    return JsonResponse(list(Vacancy.objects.values().order_by('-salary'))[:10], safe=False,json_dumps_params={'indent' : 2})
