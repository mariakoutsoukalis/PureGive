from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Organizations, Donors
from postgres_config import DATABASE_URI

# Set up the SQLAlchemy engine and session
engine = create_engine(DATABASE_URI)
Session = sessionmaker(bind=engine)
session = Session()

# Query and print specific attributes from each record in the Organizations table
try:
    organizations = session.query(Organizations).all()
    for org in organizations:
        print(f"ID: {org.OrganizationID}, Name: {org.name}, About: {org.about}, "
              f"Image URL: {org.imageurl}, Email: {org.email}, Password: {org.password}")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    session.close()

# Query and print details from the Donors table
try:
    donors = session.query(Donors).all()
    for donor in donors:
        print(f"Donor ID: {donor.DonorID}, First Name: {donor.first}, Last Name: {donor.last}, "
              f"Email: {donor.email}, Password: {donor.password}")
except Exception as e:
    print(f"An error occurred when querying Donors: {e}")
finally:
    session.close()
