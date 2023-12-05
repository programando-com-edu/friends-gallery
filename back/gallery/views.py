import base64

from django.core.files.base import ContentFile
from rest_framework.generics import CreateAPIView, RetrieveAPIView, UpdateAPIView, ListAPIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework import status

from gallery.models import UsersPosts, PostCommentaries
from gallery.serializers import UsersPostsSerializer, PostCommentariesSerializer


class CreatePostView(CreateAPIView):
    queryset = UsersPosts.objects.all()
    permission_classes = [IsAuthenticated]
    renderer_classes = [JSONRenderer]
    serializer_class = UsersPostsSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        image_data = data.get('image')

        if image_data:
            image_data = image_data.split(",")[1]
            image_binary = base64.b64decode(image_data)

            data['image'] = ContentFile(image_binary, name=data.get('image_name'))
            data['user'] = request.user.id
            data.pop('image_name', None)

            serializer = self.get_serializer(data=data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response({'detail': 'Dados inválidos para criar o post.'}, status=status.HTTP_400_BAD_REQUEST)


class ApprovePostView(UpdateAPIView):
    queryset = UsersPosts.objects.all()
    permission_classes = [IsAuthenticated]
    renderer_classes = [JSONRenderer]
    serializer_class = UsersPostsSerializer

    def patch(self, request, *args, **kwargs):
        if request.user.approval_right:
            return super().patch(request, *args, **kwargs)
        return Response({'detail': 'Não há permissão para realizar a ação'}, status=status.HTTP_401_UNAUTHORIZED)


class RetrivePostsView(ListAPIView):
    renderer_classes = [JSONRenderer]
    permission_classes = [IsAuthenticated]
    serializer_class = UsersPostsSerializer
    queryset = UsersPosts.objects.filter(approved=True).select_related('user')


class RetrivePostsForApproveView(ListAPIView):
    renderer_classes = [JSONRenderer]
    permission_classes = [IsAuthenticated]
    serializer_class = UsersPostsSerializer
    queryset = UsersPosts.objects.filter(approved=False, active=True).select_related('user')


class CreatePostCommentariesView(CreateAPIView):
    serializer_class = PostCommentariesSerializer
    queryset = PostCommentaries.objects.all()
    permission_classes = [IsAuthenticated]
    renderer_classes = [JSONRenderer]

    def post(self, request, *args, **kwargs):
        data = request.data
        data['user'] = request.user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
