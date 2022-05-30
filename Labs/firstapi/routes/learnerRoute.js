const express = require('express');
const router = express.Router();
const { getAllLearners, createLearner, getSingleLearner, getUpdateLearner, updateLearner, deleteLearner } = require('../controllers/learnerControllers');

router.route('/')
    .get(getAllLearners)
    .post(createLearner);

router.route('/:id')
    .get(getSingleLearner)
    .delete(deleteLearner);

router.route('/update/:id')
    .get(getUpdateLearner)
    .post(updateLearner)
    
router.route('/delete/:id')
    .get(deleteLearner)

module.exports = router;