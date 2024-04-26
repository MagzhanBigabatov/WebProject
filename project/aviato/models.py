from django.db import models
from django.contrib.auth.models import User


    

    
class Account(models.Model):
    nickname = models.CharField(max_length=255)
    mail = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    manager = models.BooleanField(default=False)

    def __str__(self):
         return f'{self.id}. Account nickname: {self.nickname}'
    
    def to_json(self):
         return{
              'id': self.id,
              'nickname': self.nickname,
              'mail': self.mail,
              'password': self.password,
              'manager': self.manager,
         }
    

class Hotels(models.Model):
    city = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    cost = models.FloatField(default=0)
    mini_descrip = models.TextField(default='')
    description = models.TextField(default='')
    raiting = models.IntegerField(default=0)
    arrival_date = models.DateField(default=None, null=True)
    date_departure = models.DateField(default=None, null=True)
    url = models.CharField(max_length=255, null=True)


class HotelsNUM(models.Model):
    Name = models.CharField(max_length=255)
    description = models.TextField(default='')
    cost = models.FloatField(default=0)
    hotel = models.ForeignKey(Hotels, on_delete=models.CASCADE)


class Tikets(models.Model):
    city1 = models.CharField(max_length=255)
    city2 = models.CharField(max_length=255)
    cost = models.FloatField(default=0)
    company = models.CharField(max_length=255)
    depar_date = models.DateField(default=None, null=True)
    depar_time = models.TimeField(default=None,null=True)
    Arrival_date = models.DateField(default=None,null=True)
    Arrival_time = models.TimeField(default=None,null=True)
    number = models.IntegerField(default=0)


    def to_json(self):
        return {
            'id': self.id,
            'city1': self.city1,
            'city2': self.city2,
            'cost': self.cost,
            'company': self.company,
            'depar_date': self.depar_date,
            'depar_time': self.depar_time,
            'Arrival_date': self.Arrival_date,
            'Arrival_time': self.Arrival_time,
            'number': self.number,
        }

class Buy_Ticket(models.Model):
    Per_id = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="tickets", null=True, blank=True)
    Tikets_id = models.ForeignKey(Tikets, on_delete=models.CASCADE, related_name='buy_tickets', null=True, blank=True)
    BackTic = models.ForeignKey(Tikets, on_delete=models.CASCADE, related_name='return_tickets', null=True, blank=True)
    TicNUM = models.IntegerField(default=0)
    hotelId = models.ForeignKey(HotelsNUM, on_delete=models.CASCADE, null=True, blank=True)
    HotelNUM = models.IntegerField(default=0)


    def to_json(self):
        return {
            'id': self.id,
            'Per_id': self.Per_id.id,
            'TicketsID': self.Tikets_id.id if self.Tikets_id else None,
            'TicketNUM': self.TicNUM,
            'HotelsID': self.hotelId.id if self.hotelId else None,
            'HotelNUM': self.HotelNUM,
        }



    


#добавить 






    