from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flaskapp import app, db, seed

def build_db():

    print("Dropping tables...")
    db.drop_all()
    print("Creating tables...")
    db.create_all()

    seed.seed(db)

    print("Sample DB built!")

    # print(User.query)

    return

if __name__ == '__main__':

    build_db()

    app.run(debug=True)