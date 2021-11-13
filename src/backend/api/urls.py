from django.urls import path
from rest_framework import routers

from .views import ChatGroupViewSet, ChannelViewSet


router = routers.DefaultRouter()
router.register("chat-groups", ChatGroupViewSet, basename="chat_group_viewset")
router.register("channels", ChannelViewSet, basename="channel_viewset")

urlpatterns = router.urls
