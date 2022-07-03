const mongooose = require('mongoose');

const UserSchema = new mongooose.Schema({
    name: {
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
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isChef: {
        type: Boolean,
        default: false
    },
    isCustomer: {
        type: Boolean,
        default: false
    },
    specialties: {
        type: Array,
        default: [
            'American',
            'Asian',
            'Italian',
        ]
    },
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
            },
        ]
    }
});

module.exports = { User: mongooose.model('User', UserSchema) };