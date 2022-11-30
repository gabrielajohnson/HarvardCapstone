const express = require('express');
const router = express.Router();
const { getEncyclopedia, getEncyclopedias, setEncyclopedia, updateEncyclopedia, deleteEncyclopedia } = require('../../controllers/encyclopediaController')

router.route('/country/:country').get(getEncyclopedias)

router.route('/:country').get(getEncyclopedia)

router.route('/').post(setEncyclopedia)

router.route('/:id').put(updateEncyclopedia).delete(deleteEncyclopedia)


module.exports = router;