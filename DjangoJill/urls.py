from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from filebrowser.sites import site
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

from dajaxice.core import dajaxice_autodiscover, dajaxice_config
dajaxice_autodiscover()

urlpatterns = patterns('',
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
	
	url(dajaxice_config.dajaxice_url, include('dajaxice.urls')),
	
	url(r'^tinymce/', include('tinymce.urls')),
	url(r'^grappelli/',include('grappelli.urls')),
	url(r'^admin/filebrowser/', include(site.urls)),
    # Examples:
    # url(r'^$', 'DjangoJill.views.home', name='home'),
    # url(r'^DjangoJill/', include('DjangoJill.foo.urls')),
	(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT, 'show_indexes':True}),
	(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT, 'show_indexes':True}),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

	url(r'^resume/','DjangoJill.views.resume_view',name='resume'),
	url(r'^video/','DjangoJill.views.video_view',name='video'),
	url(r'^production/','DjangoJill.views.production_view',name='production'),
	url(r'^headshots/','DjangoJill.views.headshots_view',name='headshots'),
	url(r'^$','DjangoJill.views.home_view',name='homepage'),
) 

urlpatterns += staticfiles_urlpatterns()
if settings.DEBUG:
	    # static files (images, css, javascript, etc.)
	urlpatterns += patterns('',
		(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
	)

