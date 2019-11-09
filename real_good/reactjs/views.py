from django.shortcuts import render
import os

def index(request):
    return render(request, 'reactjs/index.html', {'PRODUCTION': True if 'PRODUCTION' in os.environ else False})
