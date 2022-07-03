const mongooose = require('mongoose');

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