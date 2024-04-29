## Local Setup Guide

To run the application locally, you'll need to set up environment variables for both the client and server components. Below are examples of the required environment variables for each component.

## Client Environment Variables

Create a .env file in the client directory with the following content:

```
VITE_BACKEND_URL=http://localhost:5000

```

This variable specifies the backend URL for the client to communicate with.

## Server Environment Variables

Create a .env file in the server directory with the following content:

```
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD="" # Fill in your database password if required
DB_NAME="oso"
NODE_ENV="development"
PORT=5000
```

These variables are necessary for configuring the server's database connection and environment settings.

## Explanation of Server Environment Variables

```
DB_HOST: Specifies the hostname of the database server.
DB_USER: Specifies the username for accessing the database.
DB_PASSWORD: Specifies the password for accessing the database. Leave empty if no password is set.
DB_NAME: Specifies the name of the database.
NODE_ENV: Specifies the environment mode of the server, set to "development" for local development.
PORT: Specifies the port on which the server will run.

```

Ensure that you have appropriate values for these environment variables before running the application locally.
