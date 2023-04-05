# Create your views here.
from django.http.response import JsonResponse

from .models import Product
#

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
#
#
# def get_product(request, product_id):
#     product = Product.objects.get(id=product_id)
#     product_json = product.to_json()
#     return JsonResponse(product_json, safe=False)
