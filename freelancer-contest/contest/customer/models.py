from django.db import models

class Customer(models.Model):

    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    address = models.CharField(max_length = 250)
    postcode = models.CharField(max_length=10)
    
    def __str__(self):
        return self.first_name + ' ' + self.last_name

    class Meta:
        db_table = 'customer'
