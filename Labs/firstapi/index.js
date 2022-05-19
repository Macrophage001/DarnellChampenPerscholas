const { app, port } = require('./mongoapp');
const learnerRoute = require('./routes/learnerRoute');

app.use(process.env.LEARNER_API, learnerRoute);

app.listen(port, () => console.log('Listening on port: ' + port));