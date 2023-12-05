from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from gallery.views import CreatePostView, ApprovePostView, RetrivePostsView, RetrivePostsForApproveView, CreatePostCommentariesView

urlpatterns = [
    path('create-post/', CreatePostView.as_view(), name='create_post'),
    path('approve-post/<int:pk>/', ApprovePostView.as_view(), name='aprprove_post'),
    path('post-list/', RetrivePostsView.as_view(), name='posts_list'),
    path('post-for-approve/', RetrivePostsForApproveView.as_view(), name='posts_for_approve'),
    path('create-commentary/', CreatePostCommentariesView.as_view(), name='posts_for_approve'),
]
