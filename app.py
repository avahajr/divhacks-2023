from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# app settings
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'mysecretkey'
db = SQLAlchemy(app)

def build_db():
    print("Creating tables")
    db.create_all()

if __name__ == '__main__':

    build_db()

    app.run(debug=True)