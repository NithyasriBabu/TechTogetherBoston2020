from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Skill(models.Model):
    skill = models.CharField(max_length=50)
    userprofile = models.ForeignKey('UserProfile',on_delete=models.CASCADE)

class UserProfile(models.Model):

    privacy = models.BooleanField(default=False)

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    dob = models.DateField()

    display_picture = models.ImageField(upload_to='users')
    
    #education
    university = models.CharField(max_length=50)
    degree = models.CharField(max_length=50)
    graduation = models.DateField()
    occupation = models.CharField(max_length=50)
    
    #location
    city = models.CharField(max_length=20)
    country = models.CharField(max_length=50)

    language = models.CharField(max_length=50, null=True)

class Challenge(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    description = models.TextField(max_length=500)

    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

class ChallengeAttachments(models.Model):
    challenge = models.ForeignKey('Challenge', on_delete=models.CASCADE)
    attachment = models.FileField(upload_to='challenge')

class ChallengeCategory(models.Model):
    challenge = models.ForeignKey('Challenge', on_delete=models.CASCADE)
    category = models.CharField(max_length=50)

class Project(models.Model):
    name = models.CharField(max_length=100)
    challenge = models.ForeignKey('Challenge', on_delete=models.CASCADE)

    description = models.TextField(max_length=500)
    message = models.TextField(max_length=500)

    link = models.URLField()

    privacy = models.BooleanField(default=False)
    published = models.BooleanField(default=False)

class ProjectContributers(models.Model):
    project = models.ForeignKey('Project', on_delete=models.CASCADE)
    contributer = models.ForeignKey(User, on_delete=models.CASCADE)

class ProjectAttachments(models.Model):
    project = models.ForeignKey('Project', on_delete=models.CASCADE)
    attachment = models.FileField(upload_to='project')