const getAllLearners = (req, resp) => resp.status(500).send('Getting All Learners');
const createLearner = (req, resp) => {
    resp
        .status(200)
        .send(req.body);
}

const getSingleLearner = (req, resp) => resp.status(500).send(`Getting learner at ${req.params.id}`);
const updateLearner = (req, resp) => resp.status(500).send('Updating Learner at ${req.params.id}');
const deleteLearner = (req, resp) => resp.status(500).send('Route Undefined');

module.exports = {
    getAllLearners,
    createLearner,
    getSingleLearner,
    updateLearner,
    deleteLearner
}