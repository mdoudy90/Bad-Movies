const router = require('express').Router();
const movieController = require('../controllers/movieController.js');

router.get('/search', movieController.getSearch)
router.get('/genres', movieController.getGenres)
router.get('/favorites', movieController.getFavorites)
router.post('/save', movieController.saveMovie)
router.delete('/delete', movieController.deleteMovie)

module.exports = router;