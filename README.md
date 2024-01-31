# PureGive Prototype



https://github.com/mariakoutsoukalis/PureGive/assets/147335262/710d4c1a-aabc-4dfa-b7a8-c62a752779ef






## Introduction

PureGive is platform prototyped to connect Donors and NGOs through shared causes enabling users to generate associations based on contributions.

## Tech Stack
- **Docker**: For containerization and consistent development environments.
- **PostgreSQL**: Robust and reliable database solution for handling structured data.
- **Flask API**: Backend API development to handle business logic and data manipulation.
- **Next.js**: A React framework for building the client-side application with server-side rendering capabilities for enhanced performance and SEO.

## Getting Started

### Setting Up the Server
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Start the Docker containers:
   ```bash
   docker-compose up
   ```
3. Activate the Python virtual environment:
   ```bash
   pipenv shell
   ```
4. Run the Flask application:
   ```bash
   python3 app.py
   ```

### Setting Up the Client
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Maintenance

To ensure smooth operation and fix common issues, clear the Next.js and webpack caches occasionally.

### Clearing Caches
1. **Delete the `.next` Folder**: This contains built assets and cache.
   ```bash
   rm -rf .next
   ```
2. **Reinstall Node Modules**: To resolve dependency-related issues.
   ```bash
   rm -rf node_modules
   npm install
   ```
3. **Rebuild the Project**: Regenerate the necessary files and folders.
   ```bash
   npm run build
   ```
4. **Restart the Development Server**: To reflect the changes.
   ```bash
   npm run dev
   ```
