from django.urls import path
from secondapp import views

urlpatterns = [
path('',views.help,name="help"),
]
