const { User } = require('../models/userModel');
const { tryCatch } = require('../helper/util');

const updateUserCheckoutOrders = (req, res) => {
    tryCatch(async () => {
        const { user: { _id }, newCart } = req.body;
        console.log(req.body);
        const updatedUser = await User.findByIdAndUpdate(_id, { $set: { cart: newCart } }, { new: true });
        res.send(updatedUser.cart);
    })();
}

const addOrder = (req, res) => {
    tryCatch(async () => {
        const { user: { _id }, item } = req.body;
        const updatedUser = await User.findByIdAndUpdate(_id, { $push: { cart: item } }, { new: true });
        res.send(updatedUser.cart);
    })();
}

module.exports = { updateUserCheckoutOrders, addOrder };