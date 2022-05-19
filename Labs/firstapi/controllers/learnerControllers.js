const Learner = require('../models/learner');

const getAllLearners = async (req, resp) => {
    let learners = await Learner.find({});
    resp.render('createLearner', { learners });
}
const createLearner = async (req, resp) => {
    let newLearner = await Learner.create(req.body);
    resp.redirect(process.env.LEARNER_API);
}

const getSingleLearner = async (req, resp) => {
    let name = req.params.id;
    let result = await Learner.find({name});
    resp.render('singleLearner', { learners: result });
}

const dbFilter = (id) => ({name: id});
const getUpdateLearner = async (req, resp) => {
    let result = await Learner.findOne(dbFilter(req.params.id));
    resp.render('updateLearner', { learner: result });
}
const updateLearner = async (req, resp) => {
    let updatedData = req.body;
    await Learner.findOneAndUpdate(dbFilter(req.params.id), updatedData);
    resp.redirect(process.env.LEARNER_API);
}
const deleteLearner = async (req, resp) => {
    await Learner.remove(dbFilter(req.params.id));
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