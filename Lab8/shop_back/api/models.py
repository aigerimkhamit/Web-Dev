from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=400)

class Product(models.Model):
    name = models.CharField(max_length=400)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_activate = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count
        }

