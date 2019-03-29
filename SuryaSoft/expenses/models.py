from django.db import models

# Create your models here.

OPTIONAL = {"null": True, "blank": True}

ACTIVE = ((0, 'InActive'), (2, 'Active'))

CURRENCY_TYPE = ((0, 'INR'), (1, 'DOLLARS'), (2, 'POUNDS'), (3, 'DINAR'))


class BaseContent(models.Model):
    createdOn = models.DateTimeField(auto_now_add=True)
    modifiedOn = models.DateTimeField(auto_now=True)
    active = models.IntegerField(choices=ACTIVE, default=2)

    class Meta:
        abstract = True

    def switch(self):
        self. active = {2: 0, 0: 2}[self.active]
        self.save()


class Expense(BaseContent):
    title = models.TextField(blank=True)
    description = models.TextField(blank=True)
    currency = models.IntegerField(choices=CURRENCY_TYPE, default=0)
    amount = models.FloatField(default=0.0)

    def __str__(self):
        return '{0} {1:.2f}'.format(self.title, self.amount)


class Client(BaseContent):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class ExpenseClientRelation(BaseContent):
    expense = models.ForeignKey(Expense, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %f %s' % (self.expense.title,
                             self.expense.amount,
                             self.client.name)
