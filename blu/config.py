import os
 
basedir = os.path.abspath(os.path.dirname(__file__))
 
class BaseConfig:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'A SECRET KEY'
    user = os.environ.get('POSTGRES_USER')
    password = os.environ.get('POSTGRES_PASSWORD')
    host = os.environ.get('POSTGRES_HOST')
    database = os.environ.get('POSTGRES_DB')
    port = os.environ.get('POSTGRES_PORT')
    #DATABASE_CONNECTION_URI = f'postgresql+psycopg2://postgres:anika@0.0.0.0:5401/flaskapp'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = f'postgresql://postgres@db/postgres'