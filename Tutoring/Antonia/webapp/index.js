const express = require('express');
const multer = require('multer');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000
const maarRoute = require('./routes/maarRoute');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// app.use('/upload', maarRoute);
app.use('/api', maarRoute);

app.listen(port, () => console.log('Listening on port: ' + port));