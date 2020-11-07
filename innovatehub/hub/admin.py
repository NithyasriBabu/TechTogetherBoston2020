from django.contrib import admin
from hub import models

# Register your models here.

admin.site.register(models.Skill)
admin.site.register(models.UserProfile)
admin.site.register(models.Challenge)
admin.site.register(models.ChallengeAttachments)
admin.site.register(models.ChallengeCategory)
admin.site.register(models.Project)
admin.site.register(models.ProjectContributers)
admin.site.register(models.ProjectAttachments)