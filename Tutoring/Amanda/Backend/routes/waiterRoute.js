const express = require('express');
const waiterRouter = express.Router();
const { serverFunction, sendOrderToKitchen, getWaiterInfo, fireWaiter } = require('../controllers/waiterController');

waiterRouter
    .route('/')
    .get(serverFunction)
    .post(sendOrderToKitchen);

waiterRouter
    .route('/:id')
    .get(getWaiterInfo)

waiterRouter
    .route('/fire/:id')
    .get(fireWaiter)

module.exports = waiterRouter;