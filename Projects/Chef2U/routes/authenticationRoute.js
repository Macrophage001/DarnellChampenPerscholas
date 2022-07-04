const router = require('express').Router();

const { loginUser, getLoggedInUser, signupUser } = require('../controllers/authenticationController');

router.route('/login')
    .post(loginUser)
    .get(getLoggedInUser);

router.route('/signup')
    .post(signupUser);

module.exports = router;