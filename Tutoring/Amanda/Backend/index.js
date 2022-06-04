require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const waiterRouter = require('./routes/waiterRoute');

app.use(bodyParser.json());

/**
 * ROUTING
 */
app.use('/waiter', waiterRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));


