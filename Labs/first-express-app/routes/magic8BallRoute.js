const express = require('express');
const router = express.Router();

// Magic 8 Ball
let magic8BallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
router.get('/:question', (req, resp) => {
    resp.send([`<h2>Question: ${req.params.question}</h2>`, `<h2>Response: ${magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)]}</h2>`].join(''));
});

module.exports = router;

