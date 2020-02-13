from django.db import models
from django.utils import timezone

class Post(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
    )
    short_description = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    created_date = models.DateTimeField(default=timezone.now)
    text = models.TextField()

    def save(self, *args, **kwargs):
        """ Overriding save model method """

        if len(self.text) > 97:
            self.short_description = self.text[:97] + '...'
        else:
            self.short_description = self.text

        super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return '%s' % self.title
