from django.urls import path
from aviato.views import *
from aviato import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('login/', TokenObtainPairView.as_view()), # post
    path('refresh/', TokenRefreshView.as_view()), # post
    # path('logout/', logout), # post

    path('Account/', views.registr_login),
    path('Account/<int:ID>', AccountID.as_view()),
    path('Tickets/', TicketView.as_view()),
    path('Tickets/<int:ID>/', TicketView.as_view()),

    path('Hotels/', HotelsView.as_view()),
    path('Hotels/<int:ID>/', HotelsView.as_view())
    
]



    # Companies
    # path('company/', views.company_list),
    # path('company/<int:company_id>/', views.company_detail),
    # path('company/<int:company_id>/vacancy/', views.company_by_vacancy),

    # # Vacancies
    # path('vacancy/', views.MyVacancy),
    # path('vacancy/<int:vacancy_id>/', views.vacancy_detail),
    # path('vacancy/top_ten/', views.top10_vacancies)