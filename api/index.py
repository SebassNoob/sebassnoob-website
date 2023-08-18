import dotenv
dotenv.load_dotenv('../.env')

import os
import sys
sys.path.append(os.getcwd())

from service.projects import get_projects


from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/hello', methods=['GET'])
def main():
  
  response = jsonify({'Hello': 'World!'})
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response


@app.route('/api/get_all_projects', methods=['GET'])
def blogposts():
  response = jsonify(get_projects())
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response
  
