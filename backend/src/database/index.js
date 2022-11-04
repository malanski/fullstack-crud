const mongoose = require('mongoose');

require("dotenv").config();

// MongoDb Atlas USER and PASSWORD 
const userName = process.env.DB_USER
const password = process.env.DB_PASS

const url = `mongodb+srv://${userName}:${password}@clusterapi0.9bthufm.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {},  (error) => {
    if (error) {
        console.log("Fail to connect to mongoose");
        console.log(error);
        return;
    }
    console.log("You are connected to mongoose database");
});

mongoose.Promise = global.Promise;

module.exports = mongoose