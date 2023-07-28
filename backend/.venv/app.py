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


@app.route("/update", methods=["PUT"])
def update():
    data = request.get_json()
    transfer_data = data.get("transfer")
    transfer_id = transfer_data.get("id")
    new_name = transfer_data.get("name")

    update_url = f"{API_URL}/{transfer_id}"
    response = requests.put(update_url, json={"name": new_name})
    response.raise_for_status()
    return jsonify({"message": f"Transfer with id {transfer_id} updated successfully!"}), 200


@app.route("/delete", methods=["DELETE"])
def delete():
    data = request.get_json()
    transfer_id = data.get("id")

    delete_url = f"{API_URL}/{transfer_id}"
    response = requests.delete(delete_url)
    response.raise_for_status()
    return jsonify({"message": f"Transfer with id {transfer_id} deleted successfully!"}), 200
    
    
if __name__ == "__main__":
    app.run(debug=True)
