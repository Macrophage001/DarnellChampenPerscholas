const express = require('express');
const router = express.Router();
const { getAllLearners, createLearner, getSingleLearner, updateLearner, deleteLearner } = require('../controllers/learnerControllers');

router.route('/')
    .get(getAllLearners)
    .post(createLearner);

router.route('/:id')
    .get(getSingleLearner)
    .patch(updateLearner)
    .delete(deleteLearner);

module.exports = router;