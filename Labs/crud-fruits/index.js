const express = require('express');
const app     = express();
const port    = process.env.port || 5000;

const fruits  = require('./models/fruits.js');

app.get('/fruits', (req, resp) => {
    resp.send(fruits);
});
app.get('/fruits/:fruitIndex', (req, resp) => {
    resp.send(fruits[req.params.fruitIndex]);
});

app.listen(port, () => console.log('Listening on port: ' + port));