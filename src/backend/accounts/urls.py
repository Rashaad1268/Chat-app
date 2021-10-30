from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView

from .views import SignupView, CustomTokenObtainPairView, UserViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet, basename="user-view")

urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
] + router.urls
