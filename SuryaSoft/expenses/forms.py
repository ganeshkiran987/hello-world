from django import forms
from .models import (Expense, Client, ExpenseClientRelation)


class ExpenseForm(forms.ModelForm):

    class Meta:
        model = Expense
        fields = ['title', 'description', 'currency', 'amount']


class ClientForm(forms.ModelForm):

    class Meta:
        model = Client
        fields = ['name']


class ExpenseClientRelationForm(forms.ModelForm):

    class Meta:
        model = ExpenseClientRelation
        fields = ['expense', 'client']
