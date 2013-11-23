from django.utils import simplejson
from django.template import RequestContext
from django.template.loader import render_to_string
from dajaxice.decorators import dajaxice_register
from activity_posting.models import RecentActivityPost
import os


@dajaxice_register(name='activity_posting.get_more_posts')
def get_more_posts(request,page=0):
	posts = RecentActivityPost.objects.all()
	if i*10 > len(posts):
		posts = posts[i*10:(i+1)*10]
	posts = posts[::-1]
	post_html = render_to_string(
		'_latest_activity_template.html',
		{'posts':post},
		context_instance=RequestContext(request)
	)
	return simplejson.dumps({'post_html':post_html}) 



@dajaxice_register(name='activity_posting.thisFunctionWillEmailMe')
def thisFunctionWillEmailMe(request):
	f = None
	try:
		f = open(os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir)) +'/extras/sneaky.txt','r')
		json = {'cargo':f.readline().replace('\n','')[::-1]}
		f.close()
		json['call_status'] = True
	except:
		json = {'cargo':'','call_status':False}
	finally:
		if f:
			f.close()
	return simplejson.dumps(json)


@dajaxice_register(name='activity_posting.thisFunctionWillCallMe')
def thisFunctionWillCallMe(request):
	f = None
	try:
		f = open(os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir)) +'/extras/sneaky_tel.txt','r')
		json = {'cargo':f.readline().replace('\n','')[::-1]}
		f.close()
		json['call_status'] = True
	except:
		json = {'cargo':'','call_status':False}
	finally:
		if f:
			f.close()

	return simplejson.dumps(json)


