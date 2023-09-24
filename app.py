from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flaskapp import app, db

def build_db():

    print("Dropping tables...")
    db.drop_all()
    print("Creating tables...")
    db.create_all()

if __name__ == '__main__':

    build_db()

    app.run(debug=True)