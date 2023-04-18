
from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    # path('companies/', views.company_list),
    # path('companies/<int:id>/', views.company),
    # path('companies/<int:id>/vacancies/', views.company_vacancy),
    # path('vacancies/', views.vacancy_list),
    # path('vacancies/<int:id>/', views.vacancy),
    # path('vacancies/top_ten/', views.vacancies_top),

    path('company/', views.company_list),
    path('company/<int:company_id>/', views.Company_detail),    
    # path('company/', views.CompanyListAPIView.as_view()),
    # path('company/<int:company_id>/', views.CompanyDetailAPIView.as_view()),
    path('vacancy/', views.VacancyAPIView.as_view()),
    path('vacancy/<int:vacancy_id>/', views.VacancyDetailAPIView.as_view()),
    path('company/<int:company_id>/vacancy/', views.CompanyVacancyAPIView.as_view()),
]
