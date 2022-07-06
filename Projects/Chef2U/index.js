require('dotenv').config();

const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const password = "PASSWORDHERE";

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(require('cors')({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST']
}));
app.use(cookieParser());
app.use(expressSession({
    key: 'userId',
    secret: crypto.randomBytes(32).toString('hex'),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
    }
}));

app.use('/api', require('./routes/apiRoute'));

app.listen(port, () => console.log('Listening on port: ' + port));