const express = require('express');
const app = express();
const port = process.env.port || 5000;

let magic8BallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

let greetings = [
    (name) => `Hello, ${name}`,
    (name) => `What's up, ${name}`,
    (name) => `${name}!, It's great to see you!`,
    (name) => `${name}!, Long time no see!`
]

app.get('/greeting', (req, resp) => {
    resp.send('Hello, Stranger!');
});
app.get('/greeting/:name', (req, resp) => {
    let selectedGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    resp.send(selectedGreeting(req.params.name));
});
app.get('/tip/:total/:tipPercentage', (req, resp) => {
    resp.send(`Total Tip: ${req.params.total * req.params.tipPercentage}$`);
});

app.get('/magic/:question', (req, resp) => {
    resp.send([`<h2>Question: ${req.params.question}</h2>`, `<h2>Response: ${magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)]}</h2>`].join(''));
});

app.listen(port, () => console.log('Listening on port: ' + port));