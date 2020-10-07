const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-A4llow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}); 

app.use('/feed', feedRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message});
})

mongoose.connect('mongodb://store-manager:manaGEME173@cluster0-shard-00-00.zurim.mongodb.net:27017,cluster0-shard-00-01.zurim.mongodb.net:27017,cluster0-shard-00-02.zurim.mongodb.net:27017/messageboard?ssl=true&replicaSet=atlas-96hs71-shard-0&authSource=admin&w=majority')
.then(result => {
    app.listen(8080);
}).catch(err => {
    console.log(err);
})
