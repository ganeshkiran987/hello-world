from django.contrib import admin
from .models import (Expense, Client, ExpenseClientRelation)

# Register your models here.

admin.site.register([Expense, Client, ExpenseClientRelation])
