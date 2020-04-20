from flask import Flask, request, jsonify, make_response
from app import app
from flask_pymongo import PyMongo

app.config["MONGO_URI"] = "mongodb+srv://anika:anikafaiza@anika-kz9mx.mongodb.net/test?retryWrites=true&w=majority"

config_object = 'app.connect_db'
app.config.from_object(config_object)

mongo = PyMongo(app)