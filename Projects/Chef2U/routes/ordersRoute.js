const router = require('express').Router();

const { User } = require('../models/userModel');
const { tryCatch } = require('../helper/util');

router.route('/')
    .put((req, res) => {
        tryCatch(async () => {
            const userId = req.body.user._id;
            const user = await User.findByIdAndUpdate(userId, { cart: req.body.cart }, { new: true });
            console.log(user.cart);
            res.send(user.cart);
        })();
    })
    .delete((req, res) => {
        tryCatch(async () => {
            const { user, item } = req.body;
            console.log(user);
            const userId = user._id;
            const updatedUser = await User.findByIdAndUpdate(userId, { $pull: { cart: { item: item } } }, { new: true });
            res.send(updatedUser.cart);
        })();
    });
module.exports = router;