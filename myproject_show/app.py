from flask import Flask, request, jsonify, make_response
from flask_marshmallow import Marshmallow
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

ma = Marshmallow(app)
class UserSchema(ma.Schema):
    class Meta:
        fields = ('name', 'username')

user_schema = UserSchema(many=True)

@app.route('/api/show', methods=['GET'])
def show():
    obj = MongoCon()
    user_collection = obj.connection.db.users
    all_user = user_collection.find({})
    result = user_schema.dump(all_user)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

