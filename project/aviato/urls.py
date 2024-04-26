from django.urls import path
from aviato.views import *
from aviato import views
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    # path('login/', TokenObtainPairView.as_view()), # post
    # path('refresh/', TokenRefreshView.as_view()), # post
    # path('logout/', logout), # post

    path('Account/', views.registr_login),
    path('Account/<int:ID>', AccountID.as_view()),

    path('Tickets/', TicketView.as_view()),
    path('Tickets/<int:ID>/', TicketView.as_view()),

    path('Hotels/', HotelsView.as_view()),
    path('Hotels/<int:ID>/', HotelsView.as_view()),

    path('details/', views.buy_tickets),
    path('details/<int:pk>/', views.buy_tickets),
    path('details/<int:pk>/tickets', views.buy_ticketsId),

    path('Account/<int:pk>/tickets', views.TicketsId),
    path('Account/<int:pk>/detail/tickets', views.TicketsBuy)
    
]

