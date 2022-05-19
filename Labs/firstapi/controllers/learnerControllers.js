const Learner = require('../models/learner');

const getAllLearners = (req, resp) => resp.render('createLearner'); //resp.status(200).send('Getting All Learners');

const createLearner = (req, resp) => {
    console.log('Creating Learner');
    Learner.create(req.body, (error, createdLearner) => {
        resp.send(req.body, createdLearner, error);
    });
}

const getSingleLearner = (req, resp) => { return resp.status(200).send(`Getting learner at ${req.params.id}`); }
const updateLearner = (req, resp) => resp.status(200).send('Updating Learner at ${req.params.id}');
const deleteLearner = (req, resp) => resp.status(500).send('Route Undefined');

module.exports = {
    getAllLearners,
    createLearner,
    getSingleLearner,
    updateLearner,
    deleteLearner
};