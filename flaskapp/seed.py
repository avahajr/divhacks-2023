from flaskapp.tables import User, Post
from datetime import datetime
import random

# contains sample db values

def seed(db):
    users = {
        User(id=1, name="Osamu Dazai", username="nolongerhuman", password="riverfloat", email="odasaku@gmail.com", phone=1234567890),
        User(id=2, name="Chuuya Nakahara", username="arahabaki", password="gravity", email="thatginger@gmail.com", phone=1212323434),
        User(id=3, name="Atsushi Nakajima", username="weretiger", password="detectiveagency", email="jinko@gmail.com", phone=1114683468),
        User(id=4, name="Akutagawa Ryuunosuke", username="rashoumon", password="ilovedazai", email="portmafia@yahoo.com", phone=5658227433),
        User(id=5, name="Akiko Yosano", username="doctor", password="thoushaltnotdie", email="akikoyosano@gmail.com", phone=9997532147),
        User(id=6, name="Izumo Kyouka", username="demonsnow", password="foundfamily", email="izumik@gmail.com", phone=7642458642)
    }

    posts = {
        Post(item="trench coat", username="nolongerhuman", date=randomdate(), type="Clothes"),
        Post(item="belt", username="weretiger", date=randomdate(), type="Clothes"),
        Post(item="tie", username="doctor", date=randomdate(), type="Accessories"),
        Post(item="bandages", username="nolongerhuman", date=randomdate(), type="Other"),
        Post(item="black coat", username="rashoumon", date=randomdate(), type="Clothes"),
        Post(item="red kimono", username="demonsnow", date=randomdate(), type="Clothes"),
        Post(item="fedora hat", username="arahabaki", date=randomdate(), type="Clothes"),
        Post(item="blouae", username="rashoumon", date=randomdate(), type="Clothes"),
        Post(item="blazer", username="arahabaki", date=randomdate(), type="Clothes"),
        Post(item="headband", username="demonsnow", date=randomdate(), type="Accessories"),
        Post(item="long skirt", username="doctor", date=randomdate(), type="Clothes"),
        Post(item="boots", username="weretiger", date=randomdate(), type="Shoes")
    }

def randomdate():
    day = random.randint(1,23)
    x = datetime.datetime(2023, 9, day)
    return x