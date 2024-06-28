from flask import Blueprint, render_template

views = Blueprint('views', __name__)

#run when we are at home
@views.route('/')
def home():
    return render_template("home.html")