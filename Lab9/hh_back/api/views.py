import json

from django.core import serializers
from django.http.response import HttpResponse, JsonResponse
from .models import Company, Vacancy
from django.shortcuts import render


def home(request):
    return HttpResponse('Home Page')


def about(request):
    return HttpResponse("<h1>About Page</h1>")


def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return HttpResponse(companies_json, content_type='application/json')

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        return HttpResponse(company.to_json(), content_type='application/json')
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company)
        vacancies_json = [v.to_json() for v in vacancies]
        return HttpResponse(vacancies_json, content_type='application/json')
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [c.to_json() for c in vacancies]
    return HttpResponse(vacancies_json, content_type='application/json')

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        return HttpResponse(vacancy.to_json(), content_type='application/json')
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

def top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return HttpResponse(vacancies_json, content_type='application/json')