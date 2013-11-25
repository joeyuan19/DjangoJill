from development_settings import *

password = {}
f = None
try:
	f = open(PROJECT_ROOT+'/extras/password.csv','r')
	for line in f:
		entry = line.split(',')
		if len(entry) == 2:
			password[entry[0]]=entry[1].replace('\n','')
except:
	pass
finally:
	if f:
		f.close()


DEBUG = TEMPLATE_DEBUG = False

DATABASES['default']['ENGINE'] = 'django.db.backends.postgresql_psycopg2'
DATABASES['default']['NAME'] = 'jill_db'
DATABASES['default']['USER'] = 'jill_db_user'
try:
	DATABASES['default']['PASSWORD'] = password['db']
except:
	DATABASES['default']['PASSWORD'] = ''
	

ALLOWED_HOSTS = ['jillian.joeyuan.com','www.jillian.joeyuan.com']

STATIC_URL = 'http://jillian.joeyuan.com/static/'
STATIC_ROOT = '/home/joeyuan19/webapps/jill_static/'
STATICFILES_DIRS += (
	'/home/joeyuan19/webapps/django_jill/DjangoJill/static',
)

EMAIL_HOST = 'smtp.webfaction.com'
EMAIL_HOST_USER = 'joe_inbox'
try:
	EMAIL_HOST_PASSWORD = password['email']
except:
	EMAIL_HOST_PASSWORD = ''

DEFAULT_FROM_EMAIL = 'joe.yuan19@gmail.com'
SERVER_EMAIL = 'joe@joeyuan.com'

