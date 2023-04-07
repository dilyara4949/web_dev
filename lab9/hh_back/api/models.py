from django.db import models

# Create your models

class Company(models.Model):
    def __str__(self):
        return f'(self.name)'

    name = models.CharField()
    description = models.TextField()
    city = models.CharField()
    address = models.TextField()
    # def to_json(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name
    #     }


class Vacancy (models.Model):
    def __str__(self):
        return f'(self.name)'


    name = models.CharField()
    description = models.TextField()
    salary = models.FloatField()
    category = models.ForeignKey(Company, on_delete=models.CASCADE)


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'salary': self.salary,
            'description': self.description,
            'company': self.count
        }

