from django.shortcuts import render
from .models import Product
from django.http.response import JsonResponse

# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)