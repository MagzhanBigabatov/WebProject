from django.contrib import admin
from aviato.models import Account, Tikets

@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'nickname', 'mail', 'password', 'manager')

@admin.register(Tikets)
class TicketsAdmin(admin.ModelAdmin):
    list_display = ('id', 'city1', 'city2', 'cost', 'company', 'depar_date', 'depar_time', 'Arrival_date', 'Arrival_time', 'number')

# Register your models here.
