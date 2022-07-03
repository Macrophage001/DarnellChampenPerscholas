const { tryCatch } = require('../helper/util');
const { User } = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Will add proper validation later.
const passwordValidator = {
    simpleValidator: (password) => {
        return (userPassword) => {
            return userPassword === password;
        }
    },
    bcryptValidator: (hash) => {
        return async (userPassword) => {
            return await bcrypt.compare(userPassword, hash);
        }
    }
}

const loginUser = (req, res) => {
    tryCatch(async () => {
        const user = await User.findOne({ userName: req.body.userName });
        if (!user) {
            res.status(401).send('Invalid email or password');
            return;
        } else {
            const isPasswordCorrect = await passwordValidator.bcrypt(user.password)(req.body.password);
            if (!isPasswordCorrect) {
                res.status(401).send('Invalid email or password');
                return;
            } else {
                res.send(user);
            }
        }
    })();
}

const signupUser = (req, res) => {
    tryCatch(async () => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(401).send('User already exists');
            return;
        } else {
            const createdUser = {
                ...req.body,
                password: await bcrypt.hash(req.body.password, saltRounds)
            }
            const newUser = await User.create(createdUser);
            res.send(newUser);
        }
    })();
}

module.exports = { loginUser, signupUser };