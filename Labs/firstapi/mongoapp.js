require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000;

mongoose.connect(process.env.MONGO_URI.replace('<password>', process.env.PASSWD), {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Connected to Mongo!'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = { app, port };