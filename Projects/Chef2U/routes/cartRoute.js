const router = require('express').Router();

const { updateCart } = require('../controllers/ordersController');

router.route('/update')
    .put(updateCart)
module.exports = router;
