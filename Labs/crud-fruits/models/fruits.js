const mongoose = require('mongoose');

const fruitsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
});

const Fruit = mongoose.model('Fruit', fruitsSchema);

const fruits = [
    {
        name: 'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name: 'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name: 'banana',
        color: 'red',
        readyToEat: true
    },
    {
        name: 'mango',
        color: 'yellow',
        readyToEat: true
    },
    {
        name: 'papaya',
        color: 'orange',
        readyToEat: true
    }
];

module.exports = { fruits, Fruit };