const express = require('express');
const router = express.Router();

router.get('/:total/:tipPercentage', (req, resp) => {
    resp.send(`Total Tip: ${req.params.total * req.params.tipPercentage}$`);
});

module.exports = router;