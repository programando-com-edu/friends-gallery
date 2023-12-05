from rest_framework import serializers

from gallery.models import UsersPosts, PostCommentaries
from jwt_auth.serializers import UserSerializer


class UsersPostsSerializer(serializers.ModelSerializer):
    user_data = serializers.SerializerMethodField()
    commentaries = serializers.SerializerMethodField()

    def get_user_data(self, obj):
        return UserSerializer(obj.user).data

    def get_commentaries(self, obj):
        commentaries_query = obj.postcommentaries_set.all()
        return PostCommentariesSerializer(commentaries_query, many=True).data

    class Meta:
        model = UsersPosts
        fields = '__all__'


class PostCommentariesSerializer(serializers.ModelSerializer):
    user_data = serializers.SerializerMethodField()

    def get_user_data(self, obj):
        return UserSerializer(obj.user).data

    class Meta:
        model = PostCommentaries
        fields = '__all__'
