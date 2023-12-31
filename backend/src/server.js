const express = require('express');
const cors = require('cors');

const clientsControllers = require('./controllers/clientsControllers');

const app = express(); 

// Use of middleware
app.use(express.json(), cors()); 

 // Route configuration:
app.use('/', clientsControllers);

// Initializing the server:
app.listen(process.env.PORT || 8000,  () => {
    console.log('The server is running')
});

// This code sets up a web server using Express, defines the routes for 
// handling HTTP requests using the clientsControllers module, and starts 
// the server so that it can respond to incoming requests.
// This allows the server to communicate with the front-end application
// and execute the logic defined in the controllers to handle 
// the data and send appropriate responses.