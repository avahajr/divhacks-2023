from flaskapp import app, db
from flask_login import UserMixIn
from datetime import datetime

class User(db.Model, UserMixIn):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30))
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(30), nullable=False)
    phone = db.Column(db.Integer)

    def __repr__(self):
        return f'User({self.username}, {self.email})'

class Post():
    __table_name__ = 'posts'

    item = db.Column(db.String(30))
    user_name = db.Column(db.String(30), db.ForeignKey(User.username))
    name = db.relationship('User', foreign_keys='User.username', back_populates="posts")
    date = db.Column(db.DateTime, nullable=False, default=datetime.now)
    type = db.Column(db.String(30))

    def __repr__(self):
        return f'Post({self.item}, {self.user_name}, {self.type})'