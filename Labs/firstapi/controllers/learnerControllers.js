const Learner = require('../models/learner');

const getAllLearners = async (req, resp) => {
    let learners = await Learner.find({});
    resp.render('createLearner', { learners });
}
const createLearner = async (req, resp) => {
    try {
        let newLearner = await Learner.create(req.body);
        resp.redirect(process.env.LEARNER_API);
    } catch (e) {
        console.error('Error: ', e);
    }
}
const getSingleLearner = async (req, resp) => {
    let name = req.params.id;
    try {
        let result = await Learner.find({ name });
        resp.render('singleLearner', { learners: result });
    } catch (e) {
        console.error('Error: ', e);
    }
}

const dbFilter = (id) => ({ firstName: id });
const getUpdateLearner = async (req, resp) => {
    try {
        let result = await Learner.findOne(dbFilter(req.params.id));
        resp.render('updateLearner', { learner: result });
    } catch (e) {
        console.error('Error: ', e);
    }
}
const updateLearner = async (req, resp) => {
    try {
        let updatedData = req.body;
        await Learner.findOneAndUpdate(dbFilter(req.params.id), updatedData);
        resp.redirect(process.env.LEARNER_API);
    } catch (e) {
        console.error('Error: ', e);
    }
}
const deleteLearner = async (req, resp) => {
    try {
        await Learner.remove(dbFilter(req.params.id));
        resp.redirect(process.env.LEARNER_API);
    } catch (e) {
        console.error('Error: ', e);
    }
}

module.exports = {
    getAllLearners,
    createLearner,
    getSingleLearner,
    getUpdateLearner,
    updateLearner,
    deleteLearner
};