from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flaskapp import app, db, seed
from flaskapp.tables import *

def build_db():

    print("Dropping tables...")
    db.drop_all()
    print("Creating tables...")
    db.create_all()

    seed.seed(db)

    print("Sample DB built!")

    itemdata = Item.query.filter_by(type="Clothes")
    # all_items = [piece for piece in itemdata]
    for piece in itemdata:
        print(piece)

    return

if __name__ == '__main__':

    build_db()

    app.run(debug=True)