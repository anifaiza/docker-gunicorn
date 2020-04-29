import os
 
basedir = os.path.abspath(os.path.dirname(__file__))
 
class BaseConfig:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'A SECRET KEY'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:anika@localhost/flaskapp'