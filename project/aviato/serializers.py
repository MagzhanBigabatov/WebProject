from rest_framework import serializers
from aviato.models import Account, Tikets

#Company, Vacancy, 

# class CompanySerializer(serializers.Serializer):
#     id = serializers.IntegerField()
#     name = serializers.CharField()
#     description = serializers.CharField()
#     city = serializers.CharField()
#     address = serializers.CharField()

# class VacancyModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Vacancy
#         fields = ('id', 'name', 'salary', 'company_id', 'raiting')

class AccountSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    nickname = serializers.CharField()
    mail = serializers.CharField()
    password = serializers.CharField()
    manager = serializers.BooleanField()

class AccountSerializer1(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__' 


class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tikets
        fields = '__all__'