from app import db, ma, create_app
from flask_script import Manager, Shell, Server
from flask_migrate import Migrate, MigrateCommand
from app.models import User, UserSchema, Book, BookSchema
import os

app = create_app(os.getenv('FLASK_ENV') or 'config.BaseConfig')
migrate = Migrate(app, db)
manager = Manager(app)

with app.app_context():
    db.create_all() 

def make_shell_context():
    return dict(app=app,  db=db, ma=ma, User=User, UserSchema=UserSchema, Book=Book, BookSchema=BookSchema)

manager.add_command('shell', Shell(make_context=make_shell_context))
manager.add_command('db', MigrateCommand)
#manager.add_command('runserver', Server(host='localhost', port=8080, debug=True))

if __name__ == '__main__':
    manager.run()