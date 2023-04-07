
from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company),
    path('companies/<int:id>/vacancies/', views.company_vacancy),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy),
    path('vacancies/top_ten/', views.vacancies_top),

]
