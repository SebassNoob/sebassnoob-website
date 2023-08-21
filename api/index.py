import dotenv
dotenv.load_dotenv('../.env')

import os
import sys
sys.path.append(os.getcwd())

from service.main import get_projects, get_skills


from flask import Flask, jsonify
from flask_cors import CORS

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
  
@app.route('/api/get_all_skills', methods=['GET'])
def skills():
  response = jsonify(get_skills())
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response