const router = require('express').Router();

const searchRoute = require('./searchRoute');
const authRoute = require('./authenticationRoute');

router.use('/auth', authRoute);
router.use('/search', searchRoute);

module.exports = router;