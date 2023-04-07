from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=400)
    description = models.TextField()
    city = models.CharField()
    address = models.TextField()

class Vacancy(models.Model):
    name = models.CharField(max_length=400)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE())


