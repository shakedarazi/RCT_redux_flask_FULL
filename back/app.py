import json
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
MY_FILE = 'students.json'

def load_data():
    with open(MY_FILE, mode='r') as json_file:
        json_data = json.load(json_file)
        return json_data

@app.route('/student', methods=['POST'])
def new_student():
    data = request.get_json()   # request data as dict
    existing_data_array = load_data()
    # existing_data_array = list(existing_data_array)
    existing_data_array.append(data)
    with open(MY_FILE, 'w') as json_file:
        json.dump(existing_data_array, json_file)
    return data

@ app.route('/student', methods=['GET'])
@ app.route('/student/<int:student_id>', methods=['GET'])
def read_student(student_id = -1):
    json_data = load_data()
    if (student_id == -1):
        return json_data
    else:
        for x in json_data:
            if int(x['id']) == student_id:
                return x
        return {"msg": "not such student"}



# @app.route('/product/<int:product_id>', methods=['PUT'])
# def update_product(product_id):
#     json_data = load_data()
#     input_data = request.get_json()   
#     product_found = False
#     for product in json_data:
#         if (str(product_id) == product['pid']):
#             product_found = True
#             product.update(input_data)
#             break
#     if not product_found: 
#         return {"msg": "no such product "}
#     headers = get_headers()
#     with open(MY_FILE, 'w') as f:
#         writer = csv.DictWriter(f, fieldnames=headers)
#         writer.writeheader()
#         writer.writerows(json_data)
#     return input_data


# @app.route('/product/<int:product_id>', methods=['DELETE'])
# def delete_worker(product_id):
#     json_data = load_data()
#     index = 0
#     for product in json_data:
#         if (str(product_id) == product['pid']):
#             json_data.pop(index)
#             break
#         else:
#             index = index + 1

#     headers = get_headers()
#     with open(MY_FILE, 'w') as f:
#         writer = csv.DictWriter(f, fieldnames=headers)
#         writer.writeheader()
#         writer.writerows(json_data)

#     return jsonify({'message': product['pid']})

# ----------------------------------------------------------------

if __name__ == '__main__':
    with app.app_context():
        app.run(debug=True)