from django.shortcuts import render

def home(request):
    return render(request, 'portfolio/home.html')

def software_projects(request):
    return render(request, 'portfolio/software_projects.html')
