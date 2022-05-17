const express = require('express');
const app     = express();
const port    = process.env.port || 5000;

const fruits  = require('./models/fruits.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, resp) => resp.render('Index', { fruits }));
app.get('/fruits/new', (req, resp) => resp.render('New'));
app.get('/fruits', (req, resp) => resp.render('Show'));
app.get('/fruits/:fruitIndex', (req, resp) => resp.render('Show', { fruit: fruits[req.params.fruitIndex] }));

app.post('/fruits', (req, resp) => {
    fruits.push({ name: req.body.name, color: req.body.color, readyToEat: req.body.readyToEat === 'on' });
    resp.redirect('/');
});

app.listen(port, () => console.log('Listening on port: ' + port));