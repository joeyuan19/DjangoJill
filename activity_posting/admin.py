from django.contrib import admin
from activity_posting.models import RecentActivityPost

class RecentActivityPostAdmin(admin.ModelAdmin):
	list_display = ('title','content')

admin.site.register(RecentActivityPost,RecentActivityPostAdmin)

