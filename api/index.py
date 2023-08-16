import dotenv
dotenv.load_dotenv('../.env')
import os

from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/hello')
def main():
  return "Hello World!"


@app.route('/api/get_all_projects')
def blogposts():
  return "projects"
