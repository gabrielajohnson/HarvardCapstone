const express = require('express');
const router = express.Router();
const { getTests, setTest, updateTest, deleteTest } = require('../controllers/testController')

router.route('/').get(getTests).post(setTest)

router.route('/:id').put(updateTest).delete(deleteTest)


module.exports = router;