# Generated by Django 2.0.13 on 2019-03-29 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdOn', models.DateTimeField(auto_now_add=True)),
                ('modifiedOn', models.DateTimeField(auto_now=True)),
                ('active', models.IntegerField(choices=[(0, 'InActive'), (2, 'Active')], default=2)),
                ('name', models.CharField(max_length=250)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Expense',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdOn', models.DateTimeField(auto_now_add=True)),
                ('modifiedOn', models.DateTimeField(auto_now=True)),
                ('active', models.IntegerField(choices=[(0, 'InActive'), (2, 'Active')], default=2)),
                ('title', models.TextField(blank=True)),
                ('description', models.TextField(blank=True)),
                ('currency', models.IntegerField(choices=[(0, 'INR'), (1, 'DOLLARS'), (2, 'POUNDS'), (3, 'DINAR')], default=0)),
                ('amount', models.FloatField(default=0.0)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]