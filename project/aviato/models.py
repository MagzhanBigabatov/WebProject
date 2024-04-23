from django.db import models


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
    

class Tikets(models.Model):
    city1 = models.CharField(max_length=255)
    city2 = models.CharField(max_length=255)
    cost = models.FloatField(default=0)
    company = models.CharField(max_length=255)
    depar_date = models.DateField(default=None)
    depar_time = models.TimeField(default=None)
    Arrival_date = models.DateField(default=None)
    Arrival_time = models.TimeField(default=None)
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
    Per_id = models.ForeignKey(Account, on_delete=models.CASCADE)
    Tikets_id = models.ForeignKey(Tikets, on_delete=models.CASCADE)

    def to_json(self):
        return{
            'id': self.id,
            'Per_id': self.Per_id.id,
            'Tickets_id': self.Tikets_id.id
        }
    
class Hotels(models.Model):
    pass



    
    # Acc_id = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True)
    # Sec_tic = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)

    # Acc_id = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True)
    # Sec_tic = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)

    # Create your models here.
# class Company(models.Model):
#     id = models.IntegerField(primary_key=True)  # Поле id будет теперь primary key
#     name = models.CharField(max_length=255)
#     description = models.TextField(default='')
#     city = models.CharField(max_length=255)
#     address = models.TextField(default='')

#     class Meta:
#         verbose_name = 'Company'
#         verbose_name_plural = 'Company'

#     def __str__(self):
#         return f'{self.id}. Company name: {self.name}'

#     def to_json(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'description': self.description,
#             'city': self.city,
#             'address': self.address
#         }

# class Vacancy(models.Model):
#     name = models.CharField(max_length=255)
#     description = models.TextField(default='')
#     salary = models.FloatField(max_length=255)
#     company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
#     raiting = models.IntegerField()

#     class Meta:
#         verbose_name = 'Vacancy'
#         verbose_name_plural = 'Vacancy'

#     def __str__(self):
#         return f'{self.id}. Vacancy name: {self.name}'

    # def to_json(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name,
    #         'description': self.description,
    #         'salary': self.salary,
    #         'company_id': self.company_id.id,
    #         'raiting': self.raiting,
    #     }