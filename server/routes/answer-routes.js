const express = require('express');
const router = express.Router();
const AnswerController = require('../controllers/answer-controller');


router.route('/answering').post(AnswerController.AnsQuery);
router.route('/answers/:id').get(AnswerController.fetchAnswers);
router.route('/edit-answer/:id').put(AnswerController.editAns);
router.route('/delete-answer/:id').delete(AnswerController.deletAns);
router.route('/delete-query-ans/:id').delete(AnswerController.delteAllAnswers);


module.exports = router