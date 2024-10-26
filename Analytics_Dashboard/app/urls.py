from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="app-index"),
    path("area-chart", views.area, name="app-area-chart"),
    path("datatables", views.datatables, name="app-data-tables"),
]