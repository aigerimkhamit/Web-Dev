import json

from django.shortcuts import render

def home(request):
    return HttpResponse('Home Page')

def about(request):
    return HttpResponse("<h1>About Page</h1>")


def company_list(request):
    return HttpResponse(json.dumps(companies, indent=4), content_type = 'application/json')