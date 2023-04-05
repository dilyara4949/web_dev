# Create your views here.
from django.http.response import JsonResponse, HttpResponse

from .models import Product, Category
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
def get_product(request, id):
    try:
        product = Product.objects.get(pk=id)
        return JsonResponse(product.to_json())
    except:
        return JsonResponse({'error': 'Product not found'})

def categories(request):
    category = Category.objects.all()
    c_to_json = [c.to_json() for c in category]
    return JsonResponse(c_to_json, safe=False)

def category(request, id):
    try:
        categ = Category.objects.get(pk=id)
        return JsonResponse(categ.to_json())
    except:
        return JsonResponse({'error': 'Category not found'})

def category_product(request, id):
    products = Product.objects.filter(category=id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
def home(request):
    return HttpResponse('home page')

def del_all(request):
    Product.objects.all().delete()
    return JsonResponse({'all': 'done'})