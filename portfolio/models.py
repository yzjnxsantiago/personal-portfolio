from django.db import models

class Projects(models.Model):
    project_name = models.CharField(max_length=30)
    project_type = models.CharField(max_length=20)