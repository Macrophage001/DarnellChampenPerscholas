const mongoose = require('mongoose');

const learnerSchema = new mongoose.Schema({
    firstName:  { type: String, required: true },
    lastName:   { type: String, required: true },
    userName:   { type: String, required: [true, 'This username is already taken!'] },
    email:      { type: String, required: true },
    age:        { type: String, required: true, min: 18, max: 112 },
    location:   { type: String, required: false },
    gpa:        { type: Number, required: true},
    courses:    { type: [String] }
});

const Learner = mongoose.model('Learner', learnerSchema);

const TopLearners = (async () => await Learner.aggregate([
    {
        $match: {
            gpa: { $gte: 1.4 }
        }
    }
]))();

module.exports = Learner;