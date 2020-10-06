const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-A4llow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}); 

app.use('/feed', feedRoutes);

mongoose.connect('')
.then(result => {
    app.listen(8080);
}).catch(err => {
    console.log(err);
})
