"""SuryaSoft URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from expenses.views import (IndexPage,
                            ExpenseList, ClientList,
                            ExpenseClientRelationList,
                            ExpenseCreate, ClientCreate,
                            ExpenseClientRelationCreate,
                            ExpenseEdit,
                            ClientEdit,
                            ExpenseClientRelationEdit)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexPage.as_view()),
    path('expenses/list/', ExpenseList.as_view()),
    path('client/list/', ClientList.as_view()),
    path('expenses-client/list/', ExpenseClientRelationList.as_view()),
    path('expenses/create/', ExpenseCreate.as_view()),
    path('client/create/', ClientCreate.as_view()),
    path('expenses-client/create/', ExpenseClientRelationCreate.as_view()),
    path('expenses/edit/<int:pk>/', ExpenseEdit.as_view()),
    path('client/edit/<int:pk>/', ClientEdit.as_view()),
    path('expenses-client/edit/<int:pk>/', ExpenseClientRelationEdit.as_view())
]
