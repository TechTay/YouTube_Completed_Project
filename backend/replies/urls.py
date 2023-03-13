from django.urls import path, include
from replies import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_replies),
    path('all/', views.get_all_replies),
]