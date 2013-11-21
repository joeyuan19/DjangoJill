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
DATABASES['default']['NAME'] = ''
DATABASES['default']['USER'] = ''
try:
	DATABASES['default']['PASSWORD'] = password['db']
except:
	DATABASES['default']['PASSWORD'] = ''
	

ALLOWED_HOSTS = []

STATIC_URL = ''
STATIC_ROOT = ''
STATICFILES_DIRS += (
	'',
)

EMAIL_HOST = ''
EMAIL_HOST_USER = ''
try:
	EMAIL_HOST_PASSWORD = password['email']
except:
	EMAIL_HOST_PASSWORD = ''

DEFAULT_FROM_EMAIL = ''
SERVER_EMAIL = ''

