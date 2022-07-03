const router = require('express').Router();
const authRoute = require('./authenticationRoute');

router.use('/auth', authRoute);

module.exports = router;