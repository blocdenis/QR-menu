from .models import *
from django.contrib import admin
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import Group, Permission
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    """Категории"""
    search_fields = ('name',)
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Dish)
class DishAdmin(admin.ModelAdmin):
    """Блюда"""
    search_fields = ('title',)
    prepopulated_fields = {"slug": ("title",)}

@admin.register(Restaurants)
class RestaurantsAdmin(admin.ModelAdmin):
    """Ресторан"""
    """Выводимые поля в списке ресторанов"""
    list_display = ('name', 'user')
    search_fields = ('name',)
    prepopulated_fields = {"slug": ("name",)}

    def save_model(self, request, obj, form, change):
        # При создании нового объекта устанавливаем текущего пользователя в поле user
        if not change:
            obj.user = request.user

        # Проверяем, есть ли у пользователя уже ресторан
        existing_restaurant = Restaurants.objects.filter(user=request.user).exclude(pk=obj.pk).first()
        if existing_restaurant:
            # Если у пользователя уже есть ресторан, не создаем новый
            raise ValueError("Можно создать только один ресторан")

        super().save_model(request, obj, form, change)





"""Регистрируем сигнал после сохранения пользователя"""
@receiver(post_save, sender=User)
def set_user_staff_status(sender, instance, created, **kwargs):
    if created:
        instance.is_staff = True
        instance.save()

User = get_user_model()

def create_admin_group_and_permissions():
    """Создаем или получаем группу 'Администратор' """
    group, created = Group.objects.get_or_create(name='Администратор')

    """Задаем разрешения для добавления, просмотра и изменения ресторанов, категорий и блюд"""
    add_restaurants_permission = Permission.objects.get(codename='add_restaurants')
    view_restaurants_permission = Permission.objects.get(codename='view_restaurants')
    change_restaurants_permission = Permission.objects.get(codename='change_restaurants')
    delete_restaurants_permission = Permission.objects.get(codename='delete_restaurants')

    add_category_permission = Permission.objects.get(codename='add_category')
    view_category_permission = Permission.objects.get(codename='view_category')
    change_category_permission = Permission.objects.get(codename='change_category')
    delete_category_permission = Permission.objects.get(codename='delete_category')

    add_dish_permission = Permission.objects.get(codename='add_dish')
    view_dish_permission = Permission.objects.get(codename='view_dish')
    change_dish_permission = Permission.objects.get(codename='change_dish')
    delete_dish_permission = Permission.objects.get(codename='delete_dish')

    """Добавляем разрешения к группе"""
    group.permissions.add(
        add_restaurants_permission, view_restaurants_permission, change_restaurants_permission,
        delete_restaurants_permission,
        add_category_permission, view_category_permission, change_category_permission, delete_category_permission,
        add_dish_permission, view_dish_permission, change_dish_permission, delete_dish_permission,
    )

    """Присваиваем группу суперпользователю"""
    superuser = User.objects.get(username='kairat')
    superuser.groups.add(group)

"""Вызываем функцию для создания группы и разрешений"""
create_admin_group_and_permissions()

def create_view_own_permission(model_name):
    content_type = ContentType.objects.get_or_create(app_label='dock', model=model_name.lower())[0]
    permission_codename = f'view_own_{model_name.lower()}'
    view_own_permission, created = Permission.objects.get_or_create(codename=permission_codename, content_type=content_type)

    if created:
        print(f"Разрешение '{permission_codename}' успешно создано.")
    else:
        print(f"Разрешение '{permission_codename}' уже существует.")

    return view_own_permission

"""Список моделей для создания разрешений"""
models_to_create_permissions = ['Restaurants', 'Category', 'Dish']

"""Создаем разрешения для просмотра своих объектов"""
view_own_permissions = [create_view_own_permission(model) for model in models_to_create_permissions]

"""Присваиваем разрешения суперпользователю"""
superuser = User.objects.get(username='kairat')
superuser.user_permissions.add(*view_own_permissions)
