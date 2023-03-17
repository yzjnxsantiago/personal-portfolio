from django.db import models

class Project(models.Model):
    project_name = models.CharField(max_length=30)
    project_type = models.CharField(max_length=20)
    project_image = models.ImageField(upload_to= 'portfolio/images', default='')
    project_description = models.CharField(max_length=300) 
    url = models.URLField(blank=True)

    def __str__(self):
        return self.project_name