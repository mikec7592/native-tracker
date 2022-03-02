const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://mikec7592:garbage1@cluster0.5myv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to Mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});