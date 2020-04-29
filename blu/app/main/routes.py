from flask import current_app, Flask, Blueprint, request, jsonify, make_response
from werkzeug.security import generate_password_hash, check_password_hash
from app import db, ma
import uuid
from flask_jwt import jwt
import datetime
from functools import wraps
from app.models import User, UserSchema, Book, BookSchema
from . import main

user_schema = UserSchema()
users_schema = UserSchema(many=True)

book_schema = BookSchema()
books_schema = BookSchema(many=True,)

def token_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        token = None
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        data = jwt.decode(token, current_app.config.get('SECRET_KEY'))
        current_user = User.query.filter_by(public_id = data['Public_id']).first()
        
        return f(current_user, *args, **kwargs)
    return wrap

@main.route('/user', methods=['POST'])
def add_user():
    
    name = request.json['name']
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    hashed_pass = generate_password_hash(password, method='sha256')
    pub_id = str(uuid.uuid4())

    new_user = User(pub_id, name, username, email, hashed_pass, True)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'msg': 'new user created'})   

@main.route('/user', methods=['GET'])
@token_required
def get_users(current_user):
    if not current_user.admin:
        return jsonify({'message': 'You are not authorized for this function!'})

    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)


@main.route('/book', methods=['POST'])
@token_required
def add_book(current_user):
    if not current_user.admin:
        return jsonify({'message': 'You are not authorized for this function!'})

    name = request.json['name']
    author = request.json['author']
    publisher = request.json['publisher']
    pub_date = request.json['pub_date']
    new_book = Book(name, author, publisher, pub_date)

    db.session.add(new_book)
    db.session.commit()

    return jsonify({'msg': 'new book added'}) 

@main.route('/book', methods=['GET'])
@token_required
def get_books(current_user):
    all_books = Book.query.all()
    result = books_schema.dump(all_books)
    return jsonify(result)

@main.route('/book/<id>', methods=['GET'])
@token_required
def get_book(current_user, id):
    book = Book.query.get(id)
    return book_schema.jsonify(book)

@main.route('/book/<id>', methods=['PUT'])
@token_required
def update_book(current_user, id):
    if not current_user.admin:
        return jsonify({'message': 'You are not authorized for this function!'})

    book = Book.query.get(id)

    name = request.json['name']
    author = request.json['author']
    publisher = request.json['publisher']
    pub_date = request.json['pub_date']

    book.name = name
    book.author = author
    book.publisher = publisher
    book.pub_date = pub_date

    db.session.commit()
    return jsonify({'msg': 'Book updated'}) 

@main.route('/book/<id>', methods=['DELETE'])
@token_required
def delete_book(current_user, id):
    if not current_user.admin:
        return jsonify({'message': 'You are not authorized for this function!'})

    book = Book.query.get(id)
    db.session.delete(book)
    db.session.commit()

    return jsonify({'msg': 'book deleted'}) 

@main.route('/login')
def login():
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return make_response('Could not varify', 401, {'WWW-Authenticate':'Basic realm="Login required!"'})

    user = User.query.filter_by(username = auth.username).first()

    if not user:
        return make_response('Could not varify', 401, {'WWW-Authenticate':'Basic realm="Login required!"'})

    if check_password_hash(user.password, auth.password):
        token = jwt.encode({'Public_id' : user.public_id, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=60)}, current_app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('UTF_8')})

    return make_response('Could not varify', 401, {'WWW-Authenticate':'Basic realm="Login required!"'})

