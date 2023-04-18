from .models import Company, Vacancy
from rest_framework import serializers

class CompanySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.city = validated_data.get('city', instance.city)
        instance.description = validated_data.get('description', instance.description)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance



class CompanySerializer2(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Company
        fields = ('id', 'name', 'city', 'description', 'address')


class VacancySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = CompanySerializer2()


    def create(self, company_id, validated_data):
        vacancy = Vacancy.objects.create(**validated_data)
        return vacancy

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class VacancySerializer2(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'salary', 'description', 'company')
