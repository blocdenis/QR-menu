from rest_framework import serializers
from .models import Dish, Category
from dock.forms import RegisterUserForm
from django.contrib.auth import get_user_model, authenticate


class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ['title', 'text', 'image']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class RestaurantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = '__all__'
# User = get_user_model()
#
# class RegisterUserSerializer(serializers.ModelSerializer):
#     password1 = serializers.CharField(write_only=True, style={'input_type': 'password'})
#     password2 = serializers.CharField(write_only=True, style={'input_type': 'password'})
#
#     class Meta:
#         model = User
#         fields = ('username', 'email', 'password1', 'password2')
#
#     def validate(self, data):
#         form = RegisterUserForm(data)
#         if form.is_valid():
#             return data
#         else:
#             raise serializers.ValidationError(form.errors)
#
#     def create(self, validated_data):
#         form = RegisterUserForm(validated_data)
#         return form.save()
#
# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField(max_length=255, required=True)
#     password = serializers.CharField(style={'input_type': 'password'}, trim_whitespace=False, required=True)
#
#     def validate(self, data):
#         username = data.get('username')
#         password = data.get('password')
#
#         if username and password:
#             user = authenticate(username=username, password=password)
#             if user:
#                 data['user'] = user
#             else:
#                 raise serializers.ValidationError("Unable to log in with provided credentials.")
#         else:
#             raise serializers.ValidationError("Must include 'username' and 'password'.")
#
#         return data
#
# class LogoutSerializer(serializers.Serializer):
#     pass