from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import Group, Permission
from django.contrib.auth import get_user_model


User = get_user_model()

@receiver(post_save, sender='dock.Restaurants')
def assign_admin_for_new_restaurant(sender, instance, created, **kwargs):
    if created:
        instance.admin = instance.user
        instance.save()

@receiver(post_save, sender=User)
def assign_default_permissions(sender, instance, created, **kwargs):
    if created:
        group, created = Group.objects.get_or_create(name='Администратор')
        permission = Permission.objects.get(codename='change_authentication')
        group.permissions.add(permission)
        instance.groups.add(group)