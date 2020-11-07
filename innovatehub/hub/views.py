from django.shortcuts import render

from hub.models import Challenge
from django.http import JsonResponse

from django.views.decorators.http import require_http_methods

@require_http_methods(["POST"])
def likeChallenge(request):
    challengeID = request.POST.get('id')

    challenge = Challenge.objects.get(pk=challengeID)
    challenge.likes += 1
    challenge.save()

    return JsonResponse({'likes': challenge.likes})

@require_http_methods(["POST"])
def dislikeChallenge(request):
    challengeID = request.POST.get('id')    

    challenge = Challenge.objects.get(pk=challengeID)
    challenge.dislikes += 1
    challenge.save()

    return JsonResponse({'dislikes': challenge.dislikes})