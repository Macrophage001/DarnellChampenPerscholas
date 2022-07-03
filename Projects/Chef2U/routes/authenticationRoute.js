const router = require('express').Router();

const { loginUser, signupUser } = require('../controllers/authenticationController');

router.route('/login')
    .post(loginUser);

router.route('/signup')
    .post(signupUser);

module.exports = router;