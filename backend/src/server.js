const express = require('express');
const cors = require('cors');

const clientsControllers = require('./controllers/clientsControllers');

const app = express();

app.use(express.json(), cors());

app.use('/', clientsControllers)

app.listen(process.env.PORT || 8000,  () => {
    console.log('The server is running')
});