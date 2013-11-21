from django.db import models
from tinymce import models as tinymce_models

# Create your models here.

class RecentActivityPost(models.Model):
	title = models.CharField(max_length=50)
	content = tinymce_models.HTMLField()



