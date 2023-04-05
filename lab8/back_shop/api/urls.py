from django.urls import path, re_path
from api import views


urlpatterns = [
    path('products/', views.product_list),
    # path('products/<int:id>/', views.get_product),
    # path('categories/', views.categories),
    # path('categories/<int:id>/', views.category),
    # path('products/<int:id>/products/', views.category_product),
]
