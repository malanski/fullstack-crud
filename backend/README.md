# Backend - Client Management API

## Description
This project implements a Client Management API using Node.js and the Express framework. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on client records stored in a MongoDB database. The API utilizes the Mongoose library as an Object Data Modeling (ODM) tool for MongoDB and also uses the dotenv module to load environment variables from a .env file.
<hr>

## About the Documentation
In this back end project, every file contains a custom README to improve the developer experience and make the code easier to understand and maintain. 
## Functionality 

The client management app allows you to perform the following operations:
  
- Create a new client by making a POST request to /clients endpoint.
- Retrieve all clients by making a GET request to /clients endpoint.
- Retrieve a specific client by making a GET request to /clients/:id    endpoint, where :id is the unique identifier of the client.
- Update a client by making a PUT request to /clients/:id endpoint, -   providing the updated client data.
- Delete a client by making a DELETE request to /clients/:id endpoint, where :id is the unique identifier of the client

## Technology Stack
The application uses the following technologies:  
  
- Node.js: A JavaScript runtime environment.
- Express: A web framework for Node.js.
- MongoDB: A NoSQL database.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB.
- dotenv: A module to load environment variables from a .env file.
- Nodemon: for nodeJs db server development.  

### Deployment
To deploy the API to a cloud platform like Render or Heroku, follow the hosting provider's instructions for deploying Node.js applications. Make sure to set the environment variables for MongoDB access on the cloud platform.  

#### MongoDB Atlas:
Is a cloud-based Database as a Service (DBaaS) provided by MongoDB. It is a fully managed cloud database that stores all the data created by your application. MongoDB Atlas takes care of database provisioning, scaling, backup, and other administrative tasks, allowing you to focus on developing your application.

#### Render or Heroku
Both cloud platforms they allow this project to deploy and host your Node.js application. They provide a platform-as-a-service (PaaS) solution, which means they handle the server management and deployment process for you. You can deploy your Node.js server to either Render or Heroku, and it will run your application, making it accessible via the internet.

<hr>

# Install       
## Requirements
To run this app on your machine you will need.

- Render or a Heroku account for nodeJs server which hosts the Client Management API.  
- MongoDB Atlas Account for storing and managing the data created and used by the API. 
- npm or yarn;
- The Frontend repository running locally: [https://github.com/malanski/development-challenge-four/tree/main/frontend/](https://github.com/malanski/development-challenge-four/tree/main/frontend)


## **Project Clone**
HTTPS  
`git clone https://github.com/malanski/development-challenge-four.git`
  
SSH  
`git clone git@github.com:malanski/development-challenge-four.git`
### **Installations**
`npm install`

### Create a .env file in the root directory and add the following configuration:
`DB_USER=your-mongodb-username`
`DB_PASS=your-mongodb-password`
  
Make sure to replace your-mongodb-username and your-mongodb-password with your actual MongoDB Atlas username and password  

### Start the application:

`npm run start`  
  
The app will run on 
 
`http://localhost:8000` 


<hr>  
     
## API Endpoints  
  
The API provides the following endpoints for managing client records:

- POST /client: Creates a new client record. Requires a unique email address for each client.
 - GET /clients: Fetches all client records from the database. 
- GET /client/:id: Fetches a specific client record by ID. 
- PATCH /client/:id: Updates a client record by ID. 
- DELETE /client/:id: Deletes a client record by ID. 
  
Each endpoint returns JSON responses with appropriate status codes and error messages as needed.


## 📷 App Demonstrations

<img src="../frontend/src/assets/images/client-json.png" title="Postman user screenshot"/>
  
Use Nodemon for Development:  
<img src="../frontend/src/assets/images/backend-server.png" title="NodeJs server screenshot"/>
  
## **About the author and acknowledgment**
I Ulisses Malanski as project developer am grateful for being able to participate in this challenge, because it was a great opportunity to develop my Back end hard skills, improving my knowledge in building web applications using front and back end integration.  

<hr>
