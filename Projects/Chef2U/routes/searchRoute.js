const router = require('express').Router();
const { User } = require('../models/userModel');

const { tryCatch } = require('../helper/util');

router.route('/')
    .get((req, res) => {
        console.log(req.query);

        tryCatch(async () => {
            const usersBySpecialties = await User.find({ specialties: { $in: req.query.query } });
            const usersByRecipes = (await User.find({})).filter(user =>
                user.recipes
                    .some(recipe => recipe.name.includes(req.query.query) || recipe.ingredients.some(ingredient => ingredient.includes(req.query.query)))
            );
            res.json([...usersBySpecialties, ...usersByRecipes]);
        })();
    });

module.exports = router;