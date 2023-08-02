from flask import Flask
from service.blogpost import get_blogposts
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/hello")
def hello():
    return "Hello World!"

@app.route('/blogposts')
@cross_origin()
def blogposts():
    return {
        'content': get_blogposts()
    }
app.run(host="0.0.0.0", debug=True)