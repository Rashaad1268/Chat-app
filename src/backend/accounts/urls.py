from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import SignupView, UserViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet, basename="user-view")

urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
] + router.urls
