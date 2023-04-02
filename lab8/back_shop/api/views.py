# Create your views here.
from django.http.response import JsonResponse

from lab8.back_shop.api.models import Product


def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)