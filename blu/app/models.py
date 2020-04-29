from flask import Flask
from app import db, ma

class User(db.Model):
    __tablename__ = 'users'
    __table_args__ = {'extend_existing': True} 
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    name = db.Column(db.String(100))
    username = db.Column(db.String(50), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String)
    admin = db.Column(db.Boolean)

    def __init__(self, public_id, name, username, email, password, x):
        self.public_id = public_id
        self.name = name
        self.username = username
        self.email = email
        self.password = password
        self.admin = x

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'username', 'email', 'admin', 'public_id')

class Book(db.Model):
    __tablename__ = 'books'
    __table_args__ = {'extend_existing': True} 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    author = db.Column(db.String(100))
    publisher = db.Column(db.String(100))
    pub_date = db.Column(db.String(100))

    def __init__(self, name, author, publisher, pub_date):
        self.name = name
        self.author = author
        self.publisher = publisher
        self.pub_date = pub_date


class BookSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'author', 'publisher', 'pub_date')
