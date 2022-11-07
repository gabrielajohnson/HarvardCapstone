const express = require('express');
const router = express.Router();
const { getEncyclopedias, setEncyclopedia, updateEncyclopedia, deleteEncyclopedia } = require('../../controllers/EncyclopediaController')

router.route('/').get(getEncyclopedias).post(setEncyclopedia)

router.route('/:id').put(updateEncyclopedia).delete(deleteEncyclopedia)


module.exports = router;