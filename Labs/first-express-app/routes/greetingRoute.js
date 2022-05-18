const express = require('express');
const router = express.Router();

let greetings = [
    (name) => `Hello, ${name}`,
    (name) => `What's up, ${name}`,
    (name) => `${name}!, It's great to see you!`,
    (name) => `${name}!, Long time no see!`
]

// Greetings
router.get('/', (req, resp) => {
    resp.send('Hello, Stranger!');
});
router.get('/:name', (req, resp) => {
    let selectedGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    resp.send(selectedGreeting(req.params.name));
});

module.exports = router;
