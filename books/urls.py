from django.urls import path
from . import views
urlpatterns = [
    path("api/", views.BookAPIView.as_view()),
]
