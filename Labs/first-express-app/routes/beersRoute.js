const express = require('express');
const router = express.Router();

// Take one down, pass it around.
let currentNumOfBeers = 99;
router.get('/', (req, resp) => {
    currentNumOfBeers = 99;
    resp.send([`<h2>${currentNumOfBeers} Bottles of beer on the wall.`, `<a href="http://localhost:5000/beer/${currentNumOfBeers - 1}">Take one down, pass it around!</a>`].join(''));
});
router.get(`/:${ currentNumOfBeers < 0 ? 0 : currentNumOfBeers }`, (req, resp) => {
    currentNumOfBeers -= 1;
    
    if (currentNumOfBeers === 0) {
        resp.send([`<h2>${currentNumOfBeers} Bottles of beer on the wall.`, `<a href="http://localhost:5000/beer">Start Over</a>`].join(''));    
    }
    resp.send([`<h2>${currentNumOfBeers} Bottles of beer on the wall.`, `<a href="http://localhost:5000/beer/${currentNumOfBeers - 1}">Take one down, pass it around!</a>`].join(''));
});

module.exports = router;