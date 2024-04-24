from django.contrib import admin
from aviato.models import Account, Tikets, Hotels, HotelsNUM, Buy_Ticket

@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'nickname', 'mail', 'password', 'manager')

@admin.register(Tikets)
class TicketsAdmin(admin.ModelAdmin):
    list_display = ('id', 'city1', 'city2', 'cost', 'company', 'depar_date', 'depar_time', 'Arrival_date', 'Arrival_time', 'number')

@admin.register(Hotels)
class HotelsAdmin(admin.ModelAdmin):
    list_display = ('id', 'city', 'name', 'cost', 'mini_descrip', 'raiting', 'arrival_date', 'date_departure', 'url')

@admin.register(HotelsNUM)
class HotelsNUMAdmin(admin.ModelAdmin):
    list_display = ('id', 'Name', 'description', 'cost', 'hotel')

@admin.register(Buy_Ticket)
class BuyTicketAdmin(admin.ModelAdmin):
    list_display = ('id', 'Per_id', 'Tikets_id', 'BackTic', 'TicNUM', 'hotelId', 'HotelNUM')

# Register your models here.
