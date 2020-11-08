"""innovatehub URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

from hub.views import ChallengeEndpoints as CE

from rest_framework import routers
import hub.views as views

router = routers.DefaultRouter()
router.register(r'challenges', views.ChallengeViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('homepageinfo/', CE.getHomePageInfo, name='home'),
    path('likechallenge/', CE.likeChallenge, name='like'),
    path('dislikechallenge/', CE.dislikeChallenge, name='dislike'),
    path('categories/', CE.getAllCategories, name='categories'),
    path('topchallenges/', CE.getTopChallenges, name='topchallenges'),
    path('', include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
