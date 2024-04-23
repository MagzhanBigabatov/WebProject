from django.shortcuts import render
import json
from django.http.response import JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from aviato.models import Account, Tikets
from aviato.serializers import  AccountSerializer, TicketsSerializer

from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

#FBV
@api_view(['GET', 'POST'])
def registr_login(request):
    if request.method == 'GET':
        accounts = Account.objects.all()
        accounts_json = [account.to_json() for account in accounts]
        return JsonResponse(accounts_json, safe=False)
    
    if request.method == 'POST':
        data = json.loads(request.body)
        id = data.get('id')  
        account = Account.objects.create(
            id=id,
            nickname=data.get('nickname', ''),
            mail=data.get('mail', ''),
            password = data.get('password', '')
        )
        return JsonResponse(account.to_json())

    

class TicketView(APIView):
    def get(self, request, ID=None):
        if ID is not None:
            ticket = Tikets.objects.get(pk=ID)
            serializer = TicketsSerializer(ticket)
            return Response(serializer.data)
        else:
            ticketSet = Tikets.objects.all()
            Ticketserialzer = TicketsSerializer(ticketSet, many=True)
            return Response(Ticketserialzer.data)
    def post(self, request):
        Ticserializer = TicketsSerializer(data=request.data)
        if Ticserializer.is_valid():
            Ticserializer.save()
            return Response(Ticserializer.data, status=status.HTTP_201_CREATED)
        return Response(Ticserializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self, request, ID):
        ticket = Tikets.objects.get(pk=ID)
        serializer = TicketsSerializer(ticket, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, ID):
        ticket = Tikets.objects.get(pk=ID)
        ticket.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



    #CompanySerializer, VacancyModelSerializer,

# @csrf_exempt
# @api_view(['GET', 'POST'])
# def company_list(request):
#     if request.method == 'GET':
#         company = Company.objects.all()
#         serializer_company = CompanySerializer(company, many=True)
#         return JsonResponse(serializer_company.data, safe=False)
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         id = data.get('id')  
#         company = Company.objects.create(
#             id=id,
#             name=data.get('name', ''),
#             description=data.get('description', ''),
#             city=data.get('city', ''),
#             address=data.get('address', '')
#         )
#         return JsonResponse(company.to_json())

# @csrf_exempt
# @api_view(['GET', 'PUT', 'DELETE'])
# def company_detail(request, company_id):
#     try:
#         company = Company.objects.get(id=company_id)

#     except Company.DoesNotExist as e:
#         return JsonResponse({'Error': str(e)})

#     if request.method == 'GET':
#         return JsonResponse(company.to_json())


#     if request.method == 'PUT':
#         data = json.loads(request.body)
#         company.id = data.get('id', company.id)
#         company.name = data.get('name', company.name)
#         company.city = data.get('city', '')
#         company.description = data.get('description', '')
#         company.address = data.get('address', '')
#         company.save()
#         return JsonResponse(company.to_json())


#     if request.method == 'DELETE':
#         company.delete()
#         return JsonResponse({"deleted": True})

# @api_view(['GET', 'POST'])
# def company_by_vacancy(request, company_id):
#     if request.method == 'GET':
#         vacancies = Vacancy.objects.filter(company_id=company_id)
#         serializer = VacancyModelSerializer(vacancies, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         data = request.data
#         data['company_id'] = company_id
#         serializer = VacancyModelSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'POST'])
# def MyVacancy(request):
#     if request.method == 'GET':
#         vacancy = Vacancy.objects.all()
#         serializer_vacancy = VacancyModelSerializer(vacancy, many=True)
#         return Response(serializer_vacancy.data, status=status.HTTP_200_OK)

#     if request.method == 'POST':
#         company = Company.objects.filter(id = request.data.get('company_id')).first()
#         print(company)
#         data = request.data
#         vacancy = Vacancy.objects.create(
#             name=data.get('name', ''),
#             salary=data.get('salary', 0),
#             company_id= company,
#             raiting=data.get('raiting', 0),
#         )
#         serializer = VacancyModelSerializer(vacancy)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

# @api_view(['GET', 'PUT', 'DELETE'])
# def vacancy_detail(request, vacancy_id):
#     try:
#         vacancy = Vacancy.objects.get(id=vacancy_id)

#     except Vacancy.DoesNotExist as e:
#         return JsonResponse({'Error': str(e)})

#     if request.method == 'GET':
#         return JsonResponse(vacancy.to_json())


#     if request.method == 'PUT':
#         data = json.loads(request.body)
#         vacancy.id = data.get('name', vacancy.id)
#         vacancy.name = data.get('name', vacancy.name)
#         vacancy.salary = data.get('salary', '')
#         vacancy.description = data.get('description', '')
#         vacancy.raiting = data.get('raiting', '')
#         vacancy.save()
#         return JsonResponse(vacancy.to_json())


#     if request.method == 'DELETE':
#         vacancy.delete()
#         return JsonResponse({"deleted": True})


# @api_view(['GET'])
# def top10_vacancies(request):
#     if request.method == 'GET':
#         top10_vacancy = Vacancy.objects.all().order_by('-raiting')[:10]
#         serializer = VacancyModelSerializer(top10_vacancy, many=True)
#         return Response(serializer.data)

# @api_view(['GET'])
# def login(request):
#     if request.method


