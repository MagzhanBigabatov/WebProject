# Generated by Django 5.0.4 on 2024-04-26 04:31

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aviato', '0011_alter_buy_ticket_per_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buy_ticket',
            name='Per_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tickets', to='aviato.account'),
        ),
        migrations.DeleteModel(
            name='Profile',
        ),
    ]