from rest_framework import serializers
from aviato.models import Account, Tikets, Hotels
from .models import Buy_Ticket, HotelsNUM
from django.contrib.auth.models import User




#serializers.Serializer
class AccountSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nickname = serializers.CharField(max_length=255)
    mail = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=255)
    manager = serializers.BooleanField(default=False)

    def create(self, validated_data):
        return Account.objects.create(**validated_data)

    def update(self, instance, validated_data):

        instance.nickname = validated_data.get('nickname', instance.nickname)
        instance.mail = validated_data.get('mail', instance.mail)
        instance.password = validated_data.get('password', instance.password)
        instance.manager = validated_data.get('manager', instance.manager)
        instance.save()
        return instance

    def delete(self, instance):
        instance.delete()

class BuyTicketSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    Per_id = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all())
    Tikets_id = serializers.PrimaryKeyRelatedField(queryset=Tikets.objects.all(), allow_null=True, required=False)
    BackTic = serializers.PrimaryKeyRelatedField(queryset=Tikets.objects.all(), allow_null=True, required=False)
    hotelId = serializers.PrimaryKeyRelatedField(queryset=HotelsNUM.objects.all(), allow_null=True, required=False)

    def create(self, validated_data):
        return Buy_Ticket.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.Per_id = validated_data.get('Per_id', instance.Per_id)
        instance.Tikets_id = validated_data.get('Tikets_id', instance.Tikets_id)
        instance.BackTic = validated_data.get('BackTic', instance.BackTic)
        instance.hotelId = validated_data.get('Hotels_id', instance.hotelId)
        instance.save()
        return instance




#serializers.ModelSerializer

class UserBasicSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tikets
        fields = '__all__'

class HotelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields = '__all__'

    def create (self, validated_data):
        instance = Hotels.objects.create(
            city = validated_data['city'],
            name = validated_data['name'],
            cost = validated_data['cost'],
            mini_descrip = validated_data['mini_descrip'],
            description = validated_data['description'],
            raiting = validated_data['raiting'],
            arrival_date = validated_data['arrival_date'],
            date_departure = validated_data['date_departure'],
            url = validated_data['url'],
        )
        return instance

class HetelsNUMSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelsNUM
        fields = '__all__'