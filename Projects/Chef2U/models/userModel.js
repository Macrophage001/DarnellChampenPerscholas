const mongooose = require('mongoose');

const RecipesSchema = new mongooose.Schema({
    name: String,
    ingredients: [String],
    steps: [String],
    image: String,
    category: String,
});

const CartItemSchema = new mongooose.Schema({
    item: {
        name: String,
        image: String,
        price: Number,
    },
    quantity: Number,
});

const UserSchema = new mongooose.Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    avatar: {
        data: Buffer,
        contentType: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    customerType: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        default: 0
    },
    specialties: {
        type: Array,
        default: [
            'american',
            'asian',
            'italian',
        ]
    },
    // recipes: [RecipesSchema],
    recipes: {
        type: Array,
        default: [
            {
                name: "Grilled Chicken",
                ingredients: [
                    "Chicken",
                    "Salt",
                    "Pepper",
                    "Garlic",
                    "Onion",
                    "Tomato",
                    "Parsley",
                    "Olive Oil",
                ],
                price: 15.50,
                image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/grilled-chicken-soup.jpg?itok=_ZjQ-_qB",
            },
            {
                name: "Fried Rice",
                ingredients: [
                    "Rice",
                    "Onion",
                    "Tomato",
                    "Parsley",
                    "Olive Oil",
                ],
                price: 11.99,
                image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/grilled-chicken-soup.jpg?itok=_ZjQ-_qB",
            },
        ]
    },
    // cart: [CartItemSchema],
    cart: {
        type: Array,
        default: [
            {
                name: "Grilled Chicken",
                ingredients: [
                    "Chicken",
                    "Salt",
                    "Pepper",
                    "Garlic",
                    "Onion",
                    "Tomato",
                    "Parsley",
                    "Olive Oil",
                ],
                price: 15.50,
                image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/grilled-chicken-soup.jpg?itok=_ZjQ-_qB",
                count: 1
            },
            {
                name: "Fried Rice",
                ingredients: [
                    "Rice",
                    "Onion",
                    "Tomato",
                    "Parsley",
                    "Olive Oil",
                ],
                price: 11.99,
                image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/grilled-chicken-soup.jpg?itok=_ZjQ-_qB",
                count: 2
            },
        ]
    },
    orderHistory: {
        type: Array,
        default: [
            {
                name: "Grilled Chicken",
                ingredients: [
                    "Chicken",
                    "Salt",
                    "Pepper",
                    "Garlic",
                    "Onion",
                    "Tomato",
                    "Parsley",
                    "Olive Oil",
                ],
                price: 15.50,
                image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/grilled-chicken-soup.jpg?itok=_ZjQ-_qB",
            },
            {
                name: "Fried Rice",
                ingredients: [
                    "Rice",
                    "Onion",
                    "Tomato",
                    "Parsley",
                    "Olive Oil",
                ],
                price: 11.99,
                image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/grilled-chicken-soup.jpg?itok=_ZjQ-_qB",
            },
        ]
    }
});

module.exports = { User: mongooose.model('User', UserSchema) };