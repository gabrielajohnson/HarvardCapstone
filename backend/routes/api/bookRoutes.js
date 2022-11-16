const express = require('express');
const router = express.Router();
const { getBook, getBooks, setBook, updateBook, deleteBook } = require('../../controllers/bookController')

router.route('/country/:country').get(getBooks)

router.route('/:id').get(getBook)

router.route('/').post(setBook)

router.route('/:id').put(updateBook).delete(deleteBook)


module.exports = router;