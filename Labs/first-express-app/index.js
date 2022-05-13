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

// Greetings
app.get('/greeting', (req, resp) => {
    resp.send('Hello, Stranger!');
});
app.get('/greeting/:name', (req, resp) => {
    let selectedGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    resp.send(selectedGreeting(req.params.name));
});

// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, resp) => {
    resp.send(`Total Tip: ${req.params.total * req.params.tipPercentage}$`);
});

// Magic 8 Ball
app.get('/magic/:question', (req, resp) => {
    resp.send([`<h2>Question: ${req.params.question}</h2>`, `<h2>Response: ${magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)]}</h2>`].join(''));
});

// Take one down, pass it around.
let currentNumOfBeers = 99;
app.get('/beer', (req, resp) => {
    currentNumOfBeers = 99;
    resp.send([`<h2>${currentNumOfBeers} Bottles of beer on the wall.`, `<a href="http://localhost:5000/beer/${currentNumOfBeers - 1}">Take one down, pass it around!</a>`].join(''));
});
app.get(`/beer/:${ currentNumOfBeers < 0 ? 0 : currentNumOfBeers }`, (req, resp) => {
    currentNumOfBeers -= 1;
    
    if (currentNumOfBeers === 0) {
        resp.send([`<h2>${currentNumOfBeers} Bottles of beer on the wall.`, `<a href="http://localhost:5000/beer">Start Over</a>`].join(''));    
    }
    resp.send([`<h2>${currentNumOfBeers} Bottles of beer on the wall.`, `<a href="http://localhost:5000/beer/${currentNumOfBeers - 1}">Take one down, pass it around!</a>`].join(''));
});

// Fibonacci
function fib(num) {
    let n1 = 0, n2 = 1, nextTerm;
    let f = [];
    for (let i = 0; i <= num; i++) {
        f.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return f;
}

app.get('/fibonacci', (req, resp) => {
    resp.send(fib(100));
});
app.get('/fibonacci/:num', (req, resp) => {
    let fibNums = fib(100);
    let isFib = false;
    let fibNum = Math.floor(req.params.num);

    for (let i = 0; i < fibNums.length; i++) {
        if (fibNum === fibNums[i]) {
            isFib = true;
            break;
        }
    }
    resp.send(isFib ? 'This is a fibonacci number!' : 'This is NOT a fibonacci number!');
});

app.listen(port, () => console.log('Listening on port: ' + port));