from django.urls import include, path
from rest_framework import routers
from api_v1 import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'product', views.ProductViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'orders', views.OrderViewSet)


app_name = 'api_v1'

urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.LoginView.as_view(), name='api_token_auth'),
    path('token-login/', views.TokenLoginView.as_view(), name='api_token_re_login'),
]