from django.urls import path
from rest_framework import routers
from rest_framework_nested.routers import NestedDefaultRouter

from .views import ChatGroupViewSet, ChannelViewSet, MessageViewSet

from .consumers import ChatConsumer

router = routers.DefaultRouter()
router.register("chat-groups", ChatGroupViewSet, basename="chat_group_viewset")
router.register("channels", ChannelViewSet, basename="channel_viewset")

message_router = NestedDefaultRouter(router, "channels", lookup="channel")
message_router.register("messages", MessageViewSet, basename="message_viewset")

urlpatterns = router.urls + message_router.urls

websocket_urlpatterns = [
    path("api/ws/", ChatConsumer.as_asgi())
]
