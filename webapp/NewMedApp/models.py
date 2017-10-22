from django.db import models
from django.utils import timezone


class Call(models.Model):
    post_date = models.DateTimeField(
        default=timezone.now,verbose_name="Дата подачи")
    location = models.CharField(max_length=200, verbose_name="Локация")
    get_date = models.DateTimeField(
        blank=True, null=True, verbose_name="Дата приема")

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return str(self.post_date)+" "+str(self.location)