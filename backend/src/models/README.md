# About Models 
   
`models/Client.js`  
  
It defines a Mongoose schema for a "Client" object, specifies the fields and their data types, creates a Mongoose model for the "Client" collection, and exports the model to be used in other parts of the application for interacting with the MongoDB database.  

The model schema for the "Client" object uses Mongoose, which is an Object Data Modeling (ODM) library for MongoDB in Node.js.  
  
## 1. Importing Mongoose:  
  
   `const mongoose = require('../database');`  
     
   The code starts by importing the Mongoose library. The `../database` is the path to the Mongoose configuration file. It establishes a connection to the MongoDB database.  
  
## 2. Defining the Client Schema:  
  
`const ClientSchema = new mongoose.Schema({ ... });` 

It defines the schema for a "Client" object using `mongoose.Schema`. It is a blueprint that defines the structure of the documents within a MongoDB collection. The schema specifies the fields (properties) that a Client document should have and their data types.  
- The "Client" schema has the following fields:  
   - `name`: A required field of type `String`, representing the client's name.
   - `birthDate`: A required field of type `String`, representing the client's birth date.  
   - `email`: A required field of type `String`, representing the client's email address. The `unique: true` option ensures that each email address is unique in the collection, preventing duplicate entries.  
   - `address`: A sub-document that represents the client's address, containing the following fields:  
      - `zipCode`: A required field of type `String`, representing the client's zip code.  
      - `country`: A required field of type `String`, representing the client's country.  
      - `county`: A required field of type `String`, representing the client's county.  
      - `city`: A required field of type `String`, representing the client's city.
      - `streetAddress`: A required field of type `String`, representing the client's street address.  
      - `addition`: An optional field of type `String`, representing any additional address information.  
   - `createdAt`: A field of type `Date`, representing the date when the client document was created. If not provided during document creation, it will default to the current date and time.  
  
## 3. Creating the Client Model:  
  
   `const Client = mongoose.model('user', ClientSchema);`

The code creates a Mongoose model named "Client" based on the defined schema. The first argument `'user'` is the name of the MongoDB collection that will hold the client documents. Mongoose will automatically pluralize the collection name to 'users' and store the documents there.  
      
The `Client` model provides an interface to interact with the "Client" collection in the database. It allows performing CRUD (Create, Read, Update, Delete) operations on the collection.  
  
## 4. Exporting the Client Model:  
 
   `module.exports = Client;`

The code exports the Client model so that it can be used in other parts of the application. By exporting the model, other files can import it and perform database operations related to the Client collection.  

