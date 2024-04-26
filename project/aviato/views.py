from django.shortcuts import render
import json
from django.http.response import JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from aviato.models import Account, Tikets, Buy_Ticket, Hotels, HotelsNUM
from aviato.serializers import TicketsSerializer, BuyTicketSerializer, HotelsSerializer, AccountSerializer
from rest_framework.permissions import IsAuthenticated
from aviato.serializers import UserBasicSerializer

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
    

    

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def buy_tickets(request, pk=None):
    if request.method == 'GET':
        if pk:
            buy_ticket = get_object_or_404(Buy_Ticket, pk=pk)
            serializer = BuyTicketSerializer(buy_ticket)
            return Response(serializer.data)
        else:
            buy_tickets = Buy_Ticket.objects.all()
            serializer = BuyTicketSerializer(buy_tickets, many=True)
            return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BuyTicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    elif request.method == 'PUT':
        buy_ticket = get_object_or_404(Buy_Ticket, pk=pk)
        serializer = BuyTicketSerializer(buy_ticket, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == 'DELETE':
        buy_ticket = get_object_or_404(Buy_Ticket, pk=pk)
        buy_ticket.delete()
        return Response(status=204)
    

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def buy_ticketsId(request, pk=None):
    if request.method == 'GET':
        per_id = request.query_params.get('per_id', None)
        if per_id:
            buy_tickets = Buy_Ticket.objects.filter(Per_id=per_id)
            serializer = BuyTicketSerializer(buy_tickets, many=True)
            return Response(serializer.data)
        else:
            buy_tickets = Buy_Ticket.objects.all()
            serializer = BuyTicketSerializer(buy_tickets, many=True)
            return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BuyTicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    elif request.method == 'PUT':
        buy_ticket = get_object_or_404(Buy_Ticket, pk=pk)
        serializer = BuyTicketSerializer(buy_ticket, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == 'DELETE':
        buy_ticket = get_object_or_404(Buy_Ticket, pk=pk)
        buy_ticket.delete()
        return Response(status=204)
    

    


    


#CBV
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


class HotelsView(APIView):
    def get(self, request, ID=None):
        if ID is not None:
            hotel = Hotels.objects.get(pk=ID)
            serializer = HotelsSerializer(hotel)
            return Response(serializer.data)
        else:
            hotelSet = Hotels.objects.all()
            hotelSerializer = HotelsSerializer(hotelSet, many=True)
            return Response(hotelSerializer.data)

    def post(self, request):
        serializer = HotelsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, ID):
        hotel = Hotels.objects.get(pk=ID)
        serializer = HotelsSerializer(hotel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, ID):
        hotel = Hotels.objects.get(pk=ID)
        hotel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class AccountID(APIView):
    def get(self, request, ID=None):
        if ID is not None:
            account = Account.objects.get(pk=ID)
            serializer = AccountSerializer(account)
            return Response(serializer.data)
        else:
            accountSet = Account.objects.all()
            accountSerializer = AccountSerializer(accountSet, many=True)  # Переименовать здесь
            return Response(accountSerializer.data)
    def post(self, request):
        accountSerializer = AccountSerializer(data=request.data)  # Переименовать здесь
        if accountSerializer.is_valid():
            accountSerializer.save()
            return Response(accountSerializer.data, status=status.HTTP_201_CREATED)
        return Response(accountSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self, request, ID):
        accounts = Account.objects.get(pk=ID)
        accountSerializer = AccountSerializer(accounts, data=request.data)  # Переименовать здесь
        if accountSerializer.is_valid():
            accountSerializer.save()
            return Response(accountSerializer.data)
        return Response(accountSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    




    from aviato.serializers import UserBasicSerializer

from django.contrib.auth.models import User

class UserListAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        users = User.objects.all()
        serializer = UserBasicSerializer(users, many=True)
        return Response(serializer.data)

class UserDetailView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        user = User.objects.get(pk=pk)
        serializer = UserBasicSerializer(user)
        return Response(serializer.data)
    


index = 0
def TicketsId(request, pk=None):
    l = []
    try:
        task = Account.objects.get(id=pk)
    except Account.DoesNotExist as e:
        return JsonResponse({"error": str(e)})
    products_json = [p.to_json() for p in task.tickets.all()]
    products = list()
    
    for i in products_json:
        products.append(i)
    for i in products:
        l.append(i['TicketsID'])
    # return JsonResponse(l, safe=False)
    index = pk
    return l
    
    



# def TicketsBuy(request, pk=None):
#     list = TicketsId

#     task = list()
#     for  i in list:
#         task.append(Tikets.object.get(i))

#     products_json = [p.to_json() for p in task]

#     return JsonResponse(products_json, safe=False)



def TicketsBuy(request, pk=None):
    
    l =TicketsId(pk=pk, request=request)
    t = Tikets.objects.filter(id__in = l)
    
    data = [product.to_json() for product in t]
    return JsonResponse(data, safe=False)



