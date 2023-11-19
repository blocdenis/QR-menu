from autoslug import AutoSlugField
from django.urls import reverse
from django.contrib.auth.models import User
from django.db import models
from django.conf import settings
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from .signals import assign_default_permissions
from django.utils.text import slugify



class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)
    restaurants = models.ForeignKey(
        'Restaurants',
        related_name="menu",
        on_delete=models.SET_NULL,
        null=True,
    )
    def __str__(self):
        return self.name

class Restaurants(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)
    user = models.OneToOneField(User, verbose_name='Админ', on_delete=models.CASCADE, related_name='restaurant', editable=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Dish(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='dishes/')
    text = models.TextField()
    category = models.ForeignKey(
        Category,
        related_name="dishes",
        on_delete=models.SET_NULL,
        null=True
    )
    create_at = models.DateTimeField(auto_now_add=True)
    slug = AutoSlugField(max_length=200, unique=True)

    def __str__(self):
        return self.title


post_save.connect(assign_default_permissions, sender=settings.AUTH_USER_MODEL)

# class Authentication(AbstractUser):
#     username = models.CharField(max_length=30, unique=True)
#     password = models.CharField(max_length=128)
#     email = models.EmailField(unique=True)
#     restaurants = models.ForeignKey(
#         Restaurants,
#         related_name="user",
#         on_delete=models.SET_NULL,
#         null=True
#     )
#
#     # Добавляем related_name для groups и user_permissions
#     groups = models.ManyToManyField(
#         'auth.Group',
#         related_name='authentication_set',
#         blank=True,
#         verbose_name='groups',
#         help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
#     )
#     user_permissions = models.ManyToManyField(
#         'auth.Permission',
#         related_name='authentication_set',
#         blank=True,
#         verbose_name='user permissions',
#         help_text='Specific permissions for this user.',
#         related_query_name='user',
#     )


# class Comment(models.Model):
#     username = models.ForeignKey(Authentication, on_delete=models.CASCADE)
#     text = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#
#     def __str__(self):
#         return f'{self.username} - {self.created_at}'
#
#
