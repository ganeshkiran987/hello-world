from django.views.generic import (ListView, CreateView, TemplateView, UpdateView)
from .models import (Expense, Client, ExpenseClientRelation)
from .forms import (ExpenseForm, ClientForm, ExpenseClientRelationForm)

# Create your views here.


class IndexPage(TemplateView):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        context['expenses'] = Expense.objects.filter(active=2).count()
        context['clients'] = Client.objects.filter(active=2).count()
        context['ecrelationship'] = ExpenseClientRelation.objects.filter(active=2).count()
        return self.render_to_response(context)


class ExpenseList(ListView):
    queryset = Expense.objects.filter(active=2)
    template_name = 'expense_list.html'


class ClientList(ListView):
    queryset = Client.objects.filter(active=2)
    template_name = 'client_list.html'


class ExpenseClientRelationList(ListView):
    queryset = ExpenseClientRelation.objects.filter(active=2)
    template_name = 'expense_client_list.html'


class ExpenseCreate(CreateView):
    form_class = ExpenseForm
    template_name = 'expense_add.html'
    success_url = '/expenses/list/'


class ClientCreate(CreateView):
    form_class = ClientForm
    template_name = 'client_add.html'
    success_url = '/client/list/'


class ExpenseClientRelationCreate(CreateView):
    form_class = ExpenseClientRelationForm
    template_name = 'expense_client_add.html'
    success_url = '/expenses-client/list/'


class ExpenseEdit(UpdateView):
    queryset = Expense.objects.filter(active=2)
    form_class = ExpenseForm
    pk_url_kwarg = 'pk'
    template_name = 'expense_edit.html'
    success_url = '/expenses/list/'


class ClientEdit(UpdateView):
    queryset = Client.objects.filter(active=2)
    form_class = ClientForm
    pk_url_kwarg = 'pk'
    template_name = 'client_edit.html'
    success_url = '/client/list/'


class ExpenseClientRelationEdit(UpdateView):
    queryset = ExpenseClientRelation.objects.filter(active=2)
    form_class = ExpenseClientRelationForm
    pk_url_kwarg = 'pk'
    template_name = 'expense_client_edit.html'
    success_url = '/expenses-client/list/'
