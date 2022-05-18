const express = require('express');
const app = express();
const port = process.env.port || 5000;

const greetingRoute = require('./routes/greetingRoute');
const tipRoute = require('./routes/tipRoute')
const magicRoute = require('./routes/magic8BallRoute');
const beersRoute = require('./routes/beersRoute');
const fibRoute = require('./routes/fibRoute');

app.use('/greeting', greetingRoute);
app.use('/tip', tipRoute);
app.use('/magic', magicRoute);
app.use('/beer', beersRoute);
app.use('/fib', fibRoute);

app.listen(port, () => console.log('Listening on port: ' + port));
