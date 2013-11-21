from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from filebrowser.sites import site


# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

from dajaxice.core import dajaxice_autodiscover, dajaxice_config
dajaxice_autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'DjangoJill.views.home', name='home'),
    # url(r'^DjangoJill/', include('DjangoJill.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
	
	url(dajaxice_config.dajaxice_url, include('dajaxice.urls')),
	
	url(r'^tinymce/', include('tinymce.urls')),
	url(r'^grappelli/',include('grappelli.urls')),
	url(r'^admin/filebrowser/', include(site.urls)),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

	url(r'^resume/$','DjangoJill.views.resume_view',name='resume'),
	url(r'^video/$','DjangoJill.views.video_view',name='video'),
	url(r'^production/$','DjangoJill.views.production_view',name='production'),
	url(r'^headshots/$','DjangoJill.views.headshots_view',name='headshots'),
	url(r'^\w*','DjangoJill.views.home_view',name='homepage'),
) 

urlpatterns += staticfiles_urlpatterns()
