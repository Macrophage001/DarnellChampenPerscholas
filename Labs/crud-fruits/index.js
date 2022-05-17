require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app     = express();
const port    = process.env.port || 5000;

const { fruits, Fruit }  = require('./models/fruits.js');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo!');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, resp) => {
    Fruit.find({}, (error, allFruits) => {
        resp.render('Index', {
            fruits: allFruits
        })
    });
});

app.get('/fruits/new', (req, resp) => resp.render('New'));

app.get('/fruits', (req, resp) => {
    Fruit.find({}, (error, allFruits) => {
        resp.render('Index', {
            fruits: allFruits
        });
    });
});

app.get('/fruits/:fruitIndex', (req, resp) => resp.render('Show', { fruit: fruits[req.params.fruitIndex] }));

app.post('/fruits', (req, resp) => {
    req.body.readyToEat = req.body.readyToEat === 'on';
    Fruit.create(req.body, (error, createdFruit) => {
        resp.redirect('/');
    });
});

app.listen(port, () => console.log('Listening on port: ' + port));