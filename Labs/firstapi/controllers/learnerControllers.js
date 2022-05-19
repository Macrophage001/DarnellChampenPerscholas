const Learner = require('../models/learner');

const getAllLearners = (req, resp) => {
    Learner.find({}, (error, learners) => {
        console.log(error);
        resp.render('createLearner', {
            learners
        });
    });
}
const createLearner = (req, resp) => {
    console.log('Creating Learner');
    Learner.create(req.body, (error, createdLearner) => {
        resp.redirect(process.env.LEARNER_API);
    });
}

const getSingleLearner = async (req, resp) => {
    let name = req.params.id;
    let result = await Learner.find({name});
    resp.render('singleLearner', { learners: result });
}

const getUpdateLearner = async (req, resp) => {
    let filter = { name: req.params.id }
    let result = await Learner.findOne(filter);
    resp.render('updateLearner', { learner: result });
}
const updateLearner = async (req, resp) => {
    let filter = { name: req.params.id }
    let updatedData = req.body;
    await Learner.findOneAndUpdate(filter, updatedData);
    resp.redirect(process.env.LEARNER_API);
}
const deleteLearner = async (req, resp) => {
    let filter = { name: req.params.id }
    await Learner.remove(filter);
    resp.redirect(process.env.LEARNER_API);
}

module.exports = {
    getAllLearners,
    createLearner,
    getSingleLearner,
    getUpdateLearner,
    updateLearner,
    deleteLearner
};