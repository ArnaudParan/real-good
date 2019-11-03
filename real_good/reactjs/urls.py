from django.urls import path

from . import views

app_name = 'reactjs'
urlpatterns = [
    path('', views.index, name='index'),
]
