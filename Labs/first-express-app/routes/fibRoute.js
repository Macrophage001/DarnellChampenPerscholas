const express = require('express');
const router = express.Router();

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

router.get('/', (req, resp) => {
    resp.send(fib(100));
});
router.get('/:num', (req, resp) => {
    let fibNums = fib(1000);
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

module.exports = router;