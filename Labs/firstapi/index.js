require('dotenv').config();

const express = require('express');

const { app, port } = require('./mongoapp');

const learnerRoute = require('./routes/learnerRoute');

app.use('/api/v1/learner', learnerRoute);

app.listen(port, () => console.log('Listening on port: ' + port));