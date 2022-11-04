const express = require('express');
const cors = require('cors');

const userControllers = require('./controllers/userControllers');

const app = express();

app.use(express.json(), cors());

// app.use('/', userControllers)
app.use('/', userControllers)

app.listen(process.env.PORT || 8000,  () => {
    console.log('The server is running')
});