from django.urls import path
from .views import *

urlpatterns = [
    path('', DishListCreateView.as_view(), name='dish-list-create'),
    path('<int:pk>/', DishRetrieveUpdateDestroyView.as_view(), name='dish-retrieve-update-destroy'),
    path('<slug:inst_slug>/', RestaurantsView.as_view(), name='restaurant'),
    path('<slug:inst_slug>/<slug:cat_slug>/', DishlistView.as_view(), name='dishlist'),
    path('<slug:inst_slug>/<slug:cat_slug>/<slug:dish_slug>/', DishDetailView.as_view(), name='dishdetail'),

   # path('', home, name='home'),
    # path('login/', LoginUser.as_view(), name='login'),
    # path('logout/', logout_user, name='logout'),
    # path('register/', RegisterUser.as_view(), name='register'),
]
