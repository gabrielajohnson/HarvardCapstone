const express = require('express');
const router = express.Router();
const { getMovie, getMovies, setMovie, updateMovie, deleteMovie } = require('../../controllers/movieController')

router.route('/country/:country').get(getMovies)

router.route('/:id').get(getMovie)

router.route('/').post(setMovie)

router.route('/:id').put(updateMovie).delete(deleteMovie)


module.exports = router;