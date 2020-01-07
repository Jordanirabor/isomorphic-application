const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const api = require('./routes/api')
const pets = require('./mock')

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api)

mongoose.connect('mongodb://localhost:27017/pets', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'))

db.once('open', () => {
    app.listen(9000, () => {
        console.log('Running on port 9000')
    })
    db.collection('pets').insertMany(pets)
})