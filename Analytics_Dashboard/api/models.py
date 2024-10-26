from django.db import models

# Create your models here.
class TotalViewsModel(models.Model):
    label = models.CharField(max_length=100)
    views = models.IntegerField()

