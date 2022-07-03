const router = require('express').Router();

const { User } = require('../models/userModel');

const tryCatch = (fn, fallback = (err) => console.error(err)) => {
    return (...args) => {
        try {
            return fn(...args)
        } catch (e) {
            return fallback(e)
        }
    }
}

// Will add proper validation later.
const passwordValidator = {
    simpleValidator: (password) => {
        return (userPassword) => {
            return userPassword === password;
        }
    }
}

router.route('/login')
    .post((req, res) => {
        tryCatch(async () => {
            // First, check if there is a user by given email
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                // If there is no user, return error
                res.status(401).send('Invalid email or password');
                return;
            } else {
                // Then, check if password hash is equal to the password hash in the database
                // If there is a user, check if the password is correct
                const isPasswordCorrect = passwordValidator.simpleValidator(req.body.password)(user.password);
                if (!isPasswordCorrect) {
                    // If not, send error response to front-end.
                    // If the password is incorrect, return error.
                    res.status(401).send('Invalid email or password');
                    return;
                } else {
                    // If so, log the user in, and send logged in response to front-end.
                    // If the password is correct, return the user
                    res.send(user);
                }
            }
        })();
    });

router.route('/signup')
    .post((req, res) => {
        tryCatch(async () => {
            // First, check if there is a user by given email
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                // If there is a user, return error
                res.status(401).send('User already exists');
                return;
            } else {
                // If there is no user, create a new user
                const newUser = new User({
                    email: req.body.email,
                    password: req.body.password,
                    customerType: req.body.customerType,
                });
                // Then, save the new user to the database
                await newUser.save();
                // Then, log the user in, and send logged in response to front-end.
                // If the password is correct, return the user
                res.send(newUser);
            }
        })();
    });

module.exports = router;