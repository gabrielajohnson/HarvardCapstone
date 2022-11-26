const express = require('express');
const router = express.Router();
const { getArticle, getArticles, setArticle, updateArticle, deleteArticle } = require('../../controllers/articleController')

router.route('/country/:country').get(getArticles)

router.route('/:id').get(getArticle)

router.route('/').post(setArticle)

router.route('/:id').put(updateArticle).delete(deleteArticle)


module.exports = router;