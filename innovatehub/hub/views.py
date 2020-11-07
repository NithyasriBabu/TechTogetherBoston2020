from django.shortcuts import render

from hub.models import Challenge, ChallengeCategory
from django.http import JsonResponse

from django.views.decorators.http import require_http_methods

class ChallengeEndpoints:

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
        print(categories)
        return JsonResponse({'categories': categories})
