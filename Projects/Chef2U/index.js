require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connection;

const password = "ygrgwkVhhrTLy62";

const app = express();
const port = process.env.port || 5000;

mongoose.connect(process.env.MONGO_URI.replace('<password>', password), { useNewUrlParser: true }, () => console.log("MongoDB Connection Established!", process.env.MONGO_URI));
db.on('error', err => console.log(err.message, ' MongoDB not running!'));
db.on('disconnected', () => console.log('MongoDB disconnected!'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.listen(port, () => console.log('Listening on port: ' + port));