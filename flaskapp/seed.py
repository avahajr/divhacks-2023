from flaskapp.tables import User, Item
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

    items = {
        Item(item_id=1, item="trench coat", username="nolongerhuman", date=randomdate(), type="Clothes"),
        Item(item_id=2, item="belt", username="weretiger", date=randomdate(), type="Clothes"),
        Item(item_id=3, item="tie", username="doctor", date=randomdate(), type="Accessories"),
        Item(item_id=4, item="bandages", username="nolongerhuman", date=randomdate(), type="Other"),
        Item(item_id=5, item="black coat", username="rashoumon", date=randomdate(), type="Clothes"),
        Item(item_id=6, item="red kimono", username="demonsnow", date=randomdate(), type="Clothes"),
        Item(item_id=7, item="fedora hat", username="arahabaki", date=randomdate(), type="Clothes"),
        Item(item_id=8, item="blouse", username="rashoumon", date=randomdate(), type="Clothes"),
        Item(item_id=9, item="blazer", username="arahabaki", date=randomdate(), type="Clothes"),
        Item(item_id=10, item="headband", username="demonsnow", date=randomdate(), type="Accessories"),
        Item(item_id=11, item="long skirt", username="doctor", date=randomdate(), type="Clothes"),
        Item(item_id=12, item="boots", username="weretiger", date=randomdate(), type="Shoes")
    }

def randomdate():
    day = random.randint(1,23)
    x = datetime(2023, 9, day)
    return x