const express = require('express');
const router = express.Router();
const { getPodcasts, setPodcast, updatePodcast, deletePodcast } = require('../controllers/podcastController')

router.route('/').get(getPodcasts).post(setPodcast)

router.route('/:id').put(updatePodcast).delete(deletePodcast)


module.exports = router;