# Generated by Django 3.1.3 on 2020-11-08 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hub', '0003_auto_20201107_2220'),
    ]

    operations = [
        migrations.AddField(
            model_name='challenge',
            name='title',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
