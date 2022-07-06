const router = require('express').Router();

const { User } = require('../models/userModel');
const { tryCatch } = require('../helper/util');

const { updateUserCheckoutOrders } = require('../controllers/ordersController');

router.route('/')
    .put(updateUserCheckoutOrders)
module.exports = router;
