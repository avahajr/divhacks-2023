from flaskapp import app, db
from flaskapp.tables import *
from flask import request, render_template

@app.route('/', methods=['GET'])
@app.route('/home')
# def search():
#     filter = request.json["search"]

#     return jsonify({
        
#     })
def home():
    filter = request.args.get("filter")

    itemdata = Item.query.filter_by(filter)
    itemname = itemdata.name
    user = itemdata.username
    date = itemdata.date
    itemtype = itemdata.type
    description = itemdata.description
    
    return {
        'Name': itemname,
        'User': user,
        'Date': date,
        'Type': itemtype,
        'Description': description
    }