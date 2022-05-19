const mongoose = require('mongoose');

const learnerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    height: {type: String, required: true}
});

const Learner = mongoose.model('Learner', learnerSchema);

module.exports = Learner;