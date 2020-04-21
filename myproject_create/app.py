from flask import Flask
from flask import Flask, request, jsonify, make_response
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb+srv://anika:anikafaiza@anika-kz9mx.mongodb.net/test?retryWrites=true&w=majority"

#config_object = 'app.connect_db'
#app.config.from_object(config_object)
class singletonMeta(type):    
    __instances={}

    def __call__(cls, *args, **kwargs):
        if cls not in cls.__instances:
            cls.__instances[cls] = super(singletonMeta, cls).__call__(*args, **kwargs)

        return cls.__instances[cls]

class MongoCon(object):
    __metaclass__ = singletonMeta
    def __init__(self):
        self.connection=PyMongo(app)


#mongo = PyMongo(app)
#user_collection = mongo.db.users
#mongo = PyMongo(app)

@app.route('/api/create', methods=['POST'])
def create():
    name = request.json['name']
    username = request.json['username']
    password = request.json['password']
    obj = MongoCon()
    user_collection = obj.connection.db.users
    #user_collection = MongoCon()
    user_collection.insert({'name': name, 'username': username, 'password': password})
    return jsonify({'msg': 'new user created'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)


