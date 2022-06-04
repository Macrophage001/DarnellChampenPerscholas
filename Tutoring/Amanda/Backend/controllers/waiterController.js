let waiters = require('../models/waiters');

/**
 * CONTROLLERS 
 */
const serverFunction = (req, res) => {
    res.send('Hello, world');
}
const sendOrderToKitchen = (req, res) => {
    let order = req.body;
    res.send(order);
}
const getWaiterInfo = (req, res) => {
    let waiterName = req.params.id;
    let waitersWithName = waiters.filter(waiter => waiter.name === waiterName);
    res.send(waitersWithName);
}
const fireWaiter = (req, res) => {
    let waiterIndex = Math.floor(req.params.id);
    if (waiterIndex !== undefined) {
        waiters.splice(waiterIndex, 1);
    }
    res.send(waiters);
}

module.exports = {
    serverFunction,
    sendOrderToKitchen,
    getWaiterInfo,
    fireWaiter
}