const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000
const router = require('./routes/learnerRoute');

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/v1/learner', router);

const defaultRoute = (req, resp) => resp.status(404).send('Invalid Route');

app.all('*', defaultRoute);

app.listen(port, () => console.log('Listening on port: ' + port));