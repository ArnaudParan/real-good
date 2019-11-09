from django.urls import path

from . import views

app_name = 'reactjs'
urlpatterns = [
    path('', views.index, name='index'),
    path('privacy/', views.index, name='index'),
]
