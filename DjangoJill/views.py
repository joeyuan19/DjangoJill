from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext
from dajaxice.core import dajaxice_functions

from activity_posting.models import RecentActivityPost

def home_view(request):
	posts      = RecentActivityPost.objects.all()
	more_posts = 10 < len(posts)
	posts      = posts[::-1]
	return render_to_response('index.html',
		{'posts':posts,'more_posts':more_posts},
		context_instance=RequestContext(request)
	)

def resume_view(request):
	return render(request,'resume.html')

def video_view(request):
	return render(request,'video.html')

def production_view(request):
	return render(request,'production.html')

def headshots_view(request):
	return render(request,'headshots.html')



