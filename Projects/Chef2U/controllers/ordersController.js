const { User } = require('../models/userModel');
const { tryCatch } = require('../helper/util');

const updateCart = (req, res) => {
    tryCatch(async () => {
        const { userId, newCart } = req.body;
        const { cart } = await User.findByIdAndUpdate(userId, { $set: { cart: newCart } }, { new: true });
        console.log("Updated Cart in DB: ", cart);
        res.send(cart);
    })();
}

const addOrder = (req, res) => {
    tryCatch(async () => {
        const { userId, item } = req.body;
        const updatedUser = await User.findByIdAndUpdate(_id, { $push: { cart: item } }, { new: true });
        res.send(updatedUser.cart);
    })();
}

module.exports = { updateCart, addOrder };