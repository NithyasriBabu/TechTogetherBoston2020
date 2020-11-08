from rest_framework import serializers

from hub.models import Challenge

class ChallengeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Challenge
        fields = ['title', 'description', 'image', 'likes', 'dislikes']