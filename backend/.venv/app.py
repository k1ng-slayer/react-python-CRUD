from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_URL = "https://6499357679fbe9bcf83ec4f6.mockapi.io/transfers"


@app.route("/")
@app.route("/data")
def data():
    response = requests.get(API_URL)
    response.raise_for_status() 
    data = response.json()
    return jsonify(data), 200


@app.route("/create", methods=["POST"])
def create():
    data = request.get_json()
    new_transfer = data["transfer"]

    response = requests.post(API_URL, json=new_transfer)
    response.raise_for_status()
    return jsonify({"message": "Transfer added successfully!"}), 201


@app.route("/update", methods=["GET","POST"])
def update():
    return


@app.route("/delete", methods=["DELETE"])
def delete():
    return
    
if __name__ == "__main__":
    app.run(debug=True)
