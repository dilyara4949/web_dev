from django.db import models

# Create your models

class Company(models.Model):
    def __str__(self):
        return f'{self.name}'

    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()
    # def to_json(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name
    #     }


class Vacancy (models.Model):
    def __str__(self):
        return f'{self.name}'


    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)


    # def to_json(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name,
    #         'salary': self.salary,
    #         'description': self.description,
    #         'company': self.count
    #     }

