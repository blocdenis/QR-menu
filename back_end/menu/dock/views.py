
from django.contrib.auth import logout, login
from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from rest_framework.generics import get_object_or_404

from .forms import *
from django.views.generic import CreateView
from .models import Dish, Restaurants, Category
from .serializers import DishSerializer, CategorySerializer, RestaurantsSerializer
from rest_framework import generics, permissions
from .permissions import IsAdminWithSomeRights

class RestaurantsView(generics.ListAPIView):
    serializer_class = DishSerializer
    slug_url_kwarg = 'inst_slug'

    def get_queryset(self):
        # Извлекаем 'inst_slug' из параметров URL
        inst_slug = self.kwargs.get(self.slug_url_kwarg)

        # Фильтруем категории по slug ресторана
        categories = Category.objects.filter(restaurants__slug=inst_slug)

        # Фильтруем блюда по категориям
        queryset = Dish.objects.filter(category__in=categories)

        return queryset

class DishlistView(generics.ListAPIView):
    serializer_class = DishSerializer

    def get_queryset(self):
        inst_slug = self.kwargs.get('inst_slug')
        cat_slug = self.kwargs.get('cat_slug')

        restaurant = get_object_or_404(Restaurants, slug=inst_slug)
        category = get_object_or_404(Category, slug=cat_slug, restaurants=restaurant)

        queryset = Dish.objects.filter(category=category)
        return queryset

class DishDetailView(generics.RetrieveAPIView):
    serializer_class = DishSerializer
    lookup_field = 'slug'  # Параметр, ожидаемый в URL
    lookup_url_kwarg = 'dish_slug'  # Имя параметра в URL

    def get_queryset(self):
        inst_slug = self.kwargs.get('inst_slug')
        cat_slug = self.kwargs.get('cat_slug')
        dish_slug = self.kwargs.get('dish_slug')

        restaurant = get_object_or_404(Restaurants, slug=inst_slug)
        category = get_object_or_404(Category, slug=cat_slug, restaurants=restaurant)

        queryset = Dish.objects.filter(category=category, slug=dish_slug)
        return queryset

class DishListCreateView(generics.ListCreateAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer

class DishRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer

class MyModelListView(generics.ListCreateAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    permission_classes = [permissions.IsAuthenticated & IsAdminWithSomeRights]

    def has_permission(self, request, view):
        return request.user.is_authenticated and (request.user.is_staff or request.user.is_superuser)

# class RegisterUser(CreateView):
#     form_class = RegisterUserForm
#     template_name = 'authentication/register.html'
#
#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['title'] = "Регистрация"
#         return context
#
#     def form_valid(self, form):
#         user = form.save()
#         login(self.request, user)
#         return redirect('home')
#
# class LoginUser(LoginView):
#     form_class = CustomAuthenticationForm
#     template_name = 'authentication/login.html'
#
#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['title'] = "Авторизация"
#         return context
#
#     def get_success_url(self):
#         return reverse_lazy('home')
#
# def logout_user(request):
#     logout(request)
#     return redirect('login')
#
# def home(request):
#     return render(request, 'authentication/home.html')