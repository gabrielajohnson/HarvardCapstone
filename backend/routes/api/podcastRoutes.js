const express = require('express');
const router = express.Router();
const { getPodcast, getPodcasts, setPodcast, updatePodcast, deletePodcast } = require('../../controllers/podcastController')

router.route('/country/:country').get(getPodcasts)

router.route('/:id').get(getPodcast)

router.route('/').post(setPodcast)

router.route('/:id').put(updatePodcast).delete(deletePodcast)


module.exports = router;