from flask import Blueprint

views = Blueprint('views', __name__)

#run when we are at home
@views.route('/')
def home():
    return "<h1>Test</h1>"