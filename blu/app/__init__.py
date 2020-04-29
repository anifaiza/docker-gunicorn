from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os, config
    
db = SQLAlchemy()
ma = Marshmallow()

def create_app(config):
    app = Flask(__name__)

    app.config.from_object(config)
    db.init_app(app)
    ma.init_app(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
