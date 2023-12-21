# This README.md holds instructions to run the docker server, intialize the psql database, and configure/edit the psql tables 

Open bash terminal & cd into server
# Step 1: Start the Docker container using docker-compose
docker-compose up

# Step 2: Access the psql terminal shell within the Docker container
docker exec -it my_postgres_db psql -U my_user -p 5432 -d my_database

# Confirm table creation
\dt (view list of table)
SELECT * FROM ["table_name"]; (view table data)

# Troubleshooting:

# Create database, role, & grant privileges
CREATE DATABASE your_database;
CREATE ROLE your_user WITH LOGIN PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE your_database TO your_user;
# Verify with list of roles
\du
# Exit psql shell 
\q

# Wipe data if re-execution of step 3 is needed
DROP DATABASE my_database;

# Step 4: Seeding the database
run pipenv shell python3 seed.py