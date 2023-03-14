from django.shortcuts import render
from .models import Project

def home(request):
    return render(request, 'portfolio/home.html')

def software_projects(request):
    projects = Project.objects.all()

    return render(request, 'portfolio/software_projects.html', {'projects': projects})

def hardware_projects(request):

    projects = Project.objects.all()
    
    return render(request, 'portfolio/hardware_projects.html', {'projects': projects})
 