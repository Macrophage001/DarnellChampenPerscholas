require('dotenv').config();

const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const password = "ygrgwkVhhrTLy62";

const app = express();
const port = process.env.port || 5000;

require('./mongoose')(password);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

const apiRoute = require('./routes/apiRoute');

app.use('/api', apiRoute);

app.listen(port, () => console.log('Listening on port: ' + port));