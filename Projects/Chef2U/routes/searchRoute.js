const router = require('express').Router();
const { User } = require('../models/userModel');

const { tryCatch } = require('../helper/util');

router.route('/')
    .get((req, res) => {
        tryCatch(async () => {
            const matchingChefs = await User.find({
                isChef: true, $or: [{ specialties: { $regex: req.query.query } }, { recipes: { $elemMatch: { name: { $regex: req.query.query } } } }]
            });
            res.send(matchingChefs);
        })();
    });

module.exports = router;