const express = require('express');
const app = express();
const cors = require('cors');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const port = process.env.port || 5000
const maarRoute = require('./routes/maarRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST']
}));
app.use(cookieParser());
app.use(expressSession({
    key: 'artist',
    secret: "secret",
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
    },
}));


// app.use('/upload', maarRoute);
// app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/api', maarRoute);

app.listen(port, () => console.log('Listening on port: ' + port));