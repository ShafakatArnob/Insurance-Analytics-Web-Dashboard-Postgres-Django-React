from django.shortcuts import render
from django.http import JsonResponse
from api.models import TotalViewsModel

# Create your views here.
def totalViews(request):
    queryset = TotalViewsModel.objects.all()
    dict = {
        "labels": [],
        "data": [],
    }
    for i in queryset:
        dict["labels"].append(i.label)
        dict["data"].append(i.views)


    return JsonResponse(dict)