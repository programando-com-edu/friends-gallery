from django.contrib.auth import get_user_model
from django.db import models


class UsersPosts(models.Model):
    FRAME_CHOICES = (
        (1, 'Top rounded'),
        (2, 'Top right and bottom left rounded'),
        (3, 'Full rounded'),
        (4, 'Bottom rounded'),
        (5, 'Bottom right rounded'),
    )
    user = models.ForeignKey(get_user_model(), on_delete=models.PROTECT)
    image = models.ImageField(upload_to='post_images')
    image_frame = models.PositiveIntegerField(verbose_name="Image Frame Style", choices=FRAME_CHOICES)
    title = models.CharField(verbose_name="Title", max_length=255)
    post_commentary = models.TextField(verbose_name="Commentary", max_length=1200)
    approved = models.BooleanField(verbose_name="Post Approved?", default=False)
    active = models.BooleanField(verbose_name='Active ?', default=True)


class PostCommentaries(models.Model):
    commentary = models.TextField(verbose_name="Commentary", max_length=1200)
    user = models.ForeignKey(get_user_model(), on_delete=models.PROTECT)
    post = models.ForeignKey(UsersPosts, on_delete=models.PROTECT)
    favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.commentary
