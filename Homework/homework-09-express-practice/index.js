require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const foods = ['pie', 'turkey', 'chicken', 'soup']

app.set('view engine', 'ejs');

app.get('/', (req, resp) => {
	resp.render('index');
});
app.get('/about', (req, resp) => {
	resp.send(['<h1>This is a test</h1>', '<p>Paragraph</p>'].join(''));
});
app.get('/contact', (req, resp) => {
	resp.send({body: 'Contact Information' });
});
app.get('/services', (req, resp) => {
	resp.send('We provide a whole host of services!');
});
app.get('/partners', (req, resp) => {
	resp.send('Here are our partners');
});
app.get('/hello', (req, resp) => {
	console.log('==================================');
	console.log('REQUEST OBJECT BEGIN');
	console.log(req);
	console.log('REQUEST OBJECT END');
	console.log('==================================');
});
app.get('/hello/:firstName', (req, resp) => {
	if (req.query.title === undefined) {
		resp.send(`
			You must specify of a title (Duke, Count, etc...)...well, not really but it's more fun that way! =D
		`);
	}
	resp.send(`Hello ${req.query.title} ${req.params.firstName}`);
});

app.get('/food/:foodIndex', (req, resp) => {
	resp.send(foods[req.params.foodIndex]);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
