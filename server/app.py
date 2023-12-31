from flask import Flask, jsonify, request, render_template
import psycopg2
from postgres_config import DATABASE_CONFIG
from flask_cors import CORS, cross_origin
from datetime import datetime


app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

def get_db_connection():
    return psycopg2.connect(**DATABASE_CONFIG)

@app.route("/", methods=["GET"])
def index():
    return {"message": "Hello! Welcome to my basic REST API"}

@app.route('/donations/total', methods=['GET'])
@cross_origin()
def total_donations():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Execute a query to count the total number of donations
    cursor.execute('SELECT COUNT(*) FROM "Donations";') # Replace "Donations" with your actual table name
    total = cursor.fetchone()[0]  # Fetches the first column of the first row

    cursor.close()
    conn.close()
    return jsonify({'total_donations': total})

@app.route('/organizations/cause', methods=['GET'])
@cross_origin()
def get_organizations_causes():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Execute the query
    query = """
    SELECT o."OrganizationID", o."name" AS organization_name, o."cause_id", c."CauseID", c."cause" AS cause_name
    FROM "Organizations" o
    LEFT JOIN "Causes" c ON o."cause_id" = c."CauseID";
    """
    cursor.execute(query)
    
    # Fetch all the results
    organizations = cursor.fetchall()

    # Convert the results to a list of dictionaries
    organizations_data = [
        {
            'organization_id': org[0], 
            'organization_name': org[1], 
            'cause_id': org[2], 
            'cause_name': org[4] or 'No Cause'
        }
        for org in organizations
    ]

    cursor.close()
    conn.close()

    # Return the serialized data as a JSON response
    return jsonify(organizations_data)



@app.route('/causes', methods=['GET'])
@cross_origin()
def get_causes():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM "Causes";')  # Fetch all causes
    causes = cursor.fetchall()  # Fetches all rows

    cursor.close()
    conn.close()
    return jsonify(causes)

@app.route('/donors/causes', methods=['GET'])
@cross_origin()
def get_donors():
    conn = get_db_connection()
    cursor = conn.cursor()

    # SQL query to join "Donors", "Associations", and "Causes" tables
    query = """
    SELECT d."DonorID", d."first", d."last", cda."cause_id", c."cause", c."name"
    FROM "Donors" d
    LEFT JOIN "Associations" cda ON d."DonorID" = cda."donor_id"
    LEFT JOIN "Causes" c ON cda."cause_id" = c."CauseID";
    """

    cursor.execute(query)  # Execute the query
    query_results = cursor.fetchall()  # Fetches all rows

    # Process the fetched data
    donors = {}
    for row in query_results:
        donor_id, first, last, cause_id, cause, name = row

        # Check if the donor is already added, if not, add them
        if donor_id not in donors:
            donors[donor_id] = {
                "donor_id": donor_id,
                "first_name": first,
                "last_name": last,
                "cause_associations": []
            }

        # Add cause details to the cause_associations list
        if cause_id is not None:
            cause_details = {"cause_id": cause_id, "cause": cause, "name": name}
            donors[donor_id]["cause_associations"].append(cause_details)

    cursor.close()
    conn.close()

    # Return the donors as a list of values
    return jsonify(list(donors.values()))




@app.route('/organizations', methods=['GET'])
def get_organizations():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM "Organizations";')  # Fetch all organizations
    organizations = cursor.fetchall()  # Fetches all rows

    cursor.close()
    conn.close()
    return jsonify(organizations)


@app.route('/new/donations', methods=['POST'])
def add_donation():
    data = request.json

    conn = get_db_connection()
    cursor = conn.cursor()

    # Insert a new donation
    cursor.execute('INSERT INTO "Donations" (amount, donor_id, organization_id, timestamp) VALUES (%s, %s, %s, %s) RETURNING *;', 
                   (data['amount'], data['donor_id'], data['organization_id'], datetime.now()))

    new_donation = cursor.fetchone()  # Fetch the newly created donation
    conn.commit()  # Commit the transaction


    cursor.close()
    conn.close()
    return jsonify(new_donation)

if __name__ == '__main__':
    app.run(port=5000, debug=True)

# @app.route('/data', methods=['GET'])
# def fetch_data():
#     conn = get_db_connection()
#     cursor = conn.cursor()
#     cursor.execute('SELECT * FROM "Causes";')
#     rows = cursor.fetchall()

#     # Convert each row to a dictionary
#     data = []
#     for row in rows:
#         row_data = {}
#         for idx, value in enumerate(row):
#             # Check if value is memoryview or another non-serializable type
#             if isinstance(value, memoryview):
#                 # Example: decode binary to string; adjust as needed
#                 value = value.tobytes().decode('utf-8') 
#             row_data[cursor.description[idx][0]] = value
#         data.append(row_data)

#     cursor.close()
#     conn.close()
#     return jsonify(data)