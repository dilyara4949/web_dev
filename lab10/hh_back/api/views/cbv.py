import json

from django.shortcuts import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse, HttpResponse
from api.serializers import CompanySerializer2, VacancySerializer2

from api.models import Company, Vacancy


class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data, context={'request': request})
        if serializer.is_valid():
            # return JsonResponse({"ji": 333333})
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)
    def post(self, request):
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        try:
            vacancy_company = Company.objects.get(id=data.get('company',''))
            sal = data.get('salary', '')
            desc = data.get('description', '')
            vacancy = Vacancy.objects.create(name=vacancy_name, company=vacancy_company, salary=sal, description=desc)
            return Response(vacancy.to_json())
        except:
            return JsonResponse({"Error": "invalid input"})

        # serializer = CompanySerializer2(data=request.data, context={'request': request})
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class CompanyDetailAPIView(APIView):
    def get_object(self, company_id):
        try:
            return Company.objects.get(pk=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer2(instance)
        try:
            return Response(serializer.data)
        except:
            return JsonResponse({company_id: "Not found"})

    def put(self, request, company_id):
        try:
            instance = self.get_object(company_id)
            serializer = CompanySerializer2(instance=instance, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except:
            return JsonResponse({company_id: "Not found"})

    def delete(self, request, company_id):
        instance = self.get_object(company_id)
        try:
            instance.delete()
            return Response({'deleted': True})
        except:
            return JsonResponse({company_id: "Not found"})


class VacancyDetailAPIView(APIView):
    def get_object(self, vacancy_id):
        try:
            return Vacancy.objects.get(pk=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer2(instance)
        # try:
        return Response(serializer.data)
        # except:
        #     return JsonResponse({vacancy_id: "Not found"})

    def put(self, request, vacancy_id):
        try:
            instance = self.get_object(vacancy_id)
            serializer = VacancySerializer2(instance=instance, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except:
            return JsonResponse({vacancy_id: "Not found"})

    def delete(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        try:
            instance.delete()
            return Response({'deleted': True})
        except:
            return JsonResponse({vacancy_id: "Not found"})


class CompanyVacancyAPIView(APIView):
    def get(self, request, company_id):
        vacancies = Vacancy.objects.filter(company=company_id)
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)




#
#
# def home(request):
#     return HttpResponse('home page')
#
# #
#
# def company_list(request):
#     return JsonResponse(list(Company.objects.values()), safe=False,json_dumps_params={'indent' : 2})
# def vacancy_list(request):
#     return JsonResponse(list(Vacancy.objects.values()), safe=False,json_dumps_params={'indent' : 2})
#
# def company(request, id):
#     try:
#         c = Company.objects.get(pk=id)
#         return JsonResponse(c.to_json(), safe=False,json_dumps_params={'indent' : 2})
#     except:
#         return JsonResponse({'error': 'Company not found'})
#
#
# def vacancy(request, id):
#     try:
#         v = Vacancy.objects.get(pk=id)
#         return JsonResponse(v.to_json(), safe=False,json_dumps_params={'indent' : 2})
#     except:
#         return JsonResponse({'error': 'Vacancy not found'})
#
#
# def company_vacancy(request, id):
#     vac = Vacancy.objects.filter(company=id)
#     v_json = [v.to_json() for v in vac]
#     return JsonResponse(v_json, safe=False,json_dumps_params={'indent' : 2})
#
#
# def vacancies_top(request):
#     return JsonResponse(list(Vacancy.objects.values().order_by('-salary'))[:10], safe=False,json_dumps_params={'indent' : 2})







def home(request):
    return HttpResponse('home page')