from django.shortcuts import render

from hub.models import Challenge, ChallengeCategory
from django.http import JsonResponse

from django.views.decorators.http import require_http_methods

from rest_framework import viewsets
from hub.serializers import ChallengeSerializer

class ChallengeEndpoints:

    @require_http_methods(["POST"])
    def getHomePageInfo(self):
        allCategories = list(ChallengeCategory.objects.values('category').distinct())
        topChallenges = list(Challenge.objects.order_by('-likes').values()[:3])

        return JsonResponse({'challenges': topChallenges, 'categories': allCategories})


    @require_http_methods(["POST"])
    def likeChallenge(self, request):
        challengeID = request.POST.get('id')

        challenge = Challenge.objects.get(pk=challengeID)
        challenge.likes += 1
        challenge.save()

        return JsonResponse({'likes': challenge.likes})

    @require_http_methods(["POST"])
    def dislikeChallenge(self, request):
        challengeID = request.POST.get('id')    

        challenge = Challenge.objects.get(pk=challengeID)
        challenge.dislikes += 1
        challenge.save()

        return JsonResponse({'dislikes': challenge.dislikes})

    @require_http_methods(["POST"])
    def getAllCategories(self):
        categories = list(ChallengeCategory.objects.values('category').distinct())
        return JsonResponse({'categories': categories})

    @require_http_methods(["POST"])
    def getTopChallenges(self):
        top = list(Challenge.objects.order_by('-likes').values()[:3])
        return JsonResponse({'challenges': top})

class ChallengeViewSet(viewsets.ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer

    def post(self, request, *args, **kwargs):
        chal = Challenge.objects.create(
            title=request.data['title'],
            description=request.data['description'],
            image=request.data['image']
        )

        categories = request.data['categories']
        for category in categories:
            ChallengeCategory.create(
                challenge__id=chal.id,
                category=category
            )

        return JsonResponse({},status=201)