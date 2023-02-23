from django.conf import settings
from django.db import models
class Profile(models.Model):
    'Generated Model'
    user = models.OneToOneField("users.User",on_delete=models.CASCADE,related_name="profile_user",)
    phone_number = models.CharField(max_length=256,)
