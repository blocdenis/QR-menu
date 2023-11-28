from django import forms
from django.contrib.auth.forms import AuthenticationForm
from .models import Restaurants
from django.contrib.auth import get_user_model

User = get_user_model()
class RegisterUserForm(forms.ModelForm):
    username = forms.CharField(max_length=30, label='Логин')
    email = forms.EmailField(label='Email')
    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput())
    password2 = forms.CharField(label='Повтор пароля', widget=forms.PasswordInput())
    restaurant_name = forms.CharField(max_length=100, label='Название ресторана')

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def save(self, commit=True):
        # Создаем новый ресторан, если указано название
        restaurant_name = self.cleaned_data.get('restaurant_name')
        if restaurant_name:
            restaurant = Restaurants.objects.create(
                name=restaurant_name
            )
            # Связываем пользователя с рестораном
            user = super().save(commit=False)
            user.restaurants = restaurant
            user.save()
            return user
        else:
            # Если название не указано, просто создаем пользователя
            return super().save(commit=True)

class CustomAuthenticationForm(AuthenticationForm):
    class Meta:
        model = User
        fields = ['username', 'password']

# Регистрация админа
# class RegisterUserForm(UserCreationForm):
#     restaurant_name = forms.CharField(max_length=100, label='Название ресторана')
#
#
#     class Meta:
#         model = User
#         fields = ('username', 'email')
#         labels = {
#             'username': 'Логин',
#             'email': 'Email',
#         }
#
#     password1 = forms.CharField(
#         label='Пароль',
#         widget=forms.PasswordInput,
#         strip=False,
#     )
#
#     password2 = forms.CharField(
#         label='Повтор пароля',
#         widget=forms.PasswordInput,
#         strip=False,
#     )
#
#     def form_valid(self, form):
#         # Создаем новый ресторан, если указано название
#         restaurant_name = form.cleaned_data.get('restaurant_name')
#         if restaurant_name:
#             restaurant = Restaurants.objects.create(
#                 name=restaurant_name
#             )
#             # Связываем пользователя с рестораном
#             user = form.save(commit=False)
#             user.restaurants = restaurant
#             user.save()
#         else:
#             # Если название не указано, просто создаем пользователя
#             form.save()
#
#         return super().form_valid(form)
#
# # Авторизация админа
# class CustomAuthenticationForm(AuthenticationForm):
#     class Meta:
#         model = User
#         fields = ['username', 'password']

# class CustomAuthenticationForm(AuthenticationForm):
#     class Meta:
#         model = Authentication
#         fields = ['username', 'password']
#
#
# class RegisterUserForm(forms.ModelForm):
#     restaurants = forms.ModelChoiceField(queryset=Restaurants.objects.all(), required=False, label='Ресторан')
#
#     class Meta:
#         model = Authentication
#         fields = ('username', 'email', 'password1', 'password2')
#         labels = {
#             'username': 'Логин',
#             'email': 'Email',
#             'password1': 'Пароль',
#             'password2': 'Повтор пароля',
#         }

# class RegisterUserForm(UserCreationForm):
#     restaurants = forms.ModelChoiceField(queryset=Restaurants.objects.all(), required=False, label='Ресторан')
#     class Meta:
#         model = Authentication
#         fields = ('username', 'email', 'password1', 'password2')
#         labels = {
#             'username': 'Логин',
#             'email': 'Email',
#             'password1': 'Пароль',
#             'password2': 'Повтор пароля',
#         }
#
#
# class LoginUserForm(AuthenticationForm):
#     class Meta:
#         model = Authentication
#         fields = ('username', 'password')
#         labels = {
#             'username': 'Логин',
#             'password': 'Пароль',
#         }