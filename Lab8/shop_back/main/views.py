from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
import json
# Create your views here.
def home(request):
    return HttpResponse('Home Page')

def about(request):
    return HttpResponse("<h1>About Page</h1>")


products = [
    {
        'id': _id,
        'name': f'Product {_id}',
        'price': _id * 1000,
        'description': 'alalallala',
        'count': _id * 10,
        'category': f'Category {_id}'
    }
    for _id in range(1, 11)
]

categories = [
    {
        'id': id_,
        'name': f'Category {id_}'
    }
    for id_ in range(1, 11)
]

def product_list(request):
    return HttpResponse(json.dumps(products, indent=4), content_type='application/json')

def product_detail(request, id):
    for p in products:
        if p['id'] == id:
            return HttpResponse(json.dumps(p, indent=4), content_type='application/json')
    return JsonResponse({'error': 'Product Not Found'})

def category_list(request):
    return HttpResponse(json.dumps(categories, indent=4), content_type='application/json')

def category_detail(request, id):
    for c in categories:
        if c['id'] == id:
            return HttpResponse(json.dumps(c, indent=4), content_type='application/json')
    return JsonResponse({'error': 'Category Not Found'})

def category_products(request, id):
    category_products = [p for p in products if p['category'] == f'Category {id}']
    category_products_json = json.dumps(category_products, indent=4)
    return HttpResponse(category_products_json, content_type='application/json')

