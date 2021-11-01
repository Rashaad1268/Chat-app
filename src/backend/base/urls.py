from django.urls import path
from rest_framework import routers

from .views import ChatGroupViewSet


router = routers.DefaultRouter()
router.register("chat-groups", ChatGroupViewSet, basename="chat_group_viewset")

urlpatterns = router.urls
