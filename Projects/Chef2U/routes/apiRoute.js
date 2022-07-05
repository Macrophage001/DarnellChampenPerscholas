const router = require('express').Router();

const searchRoute = require('./searchRoute');
const authRoute = require('./authenticationRoute');
const ordersRoute = require('./ordersRoute');

router.use('/auth', authRoute);
router.use('/search', searchRoute);
router.use('/orders', ordersRoute);

module.exports = router;