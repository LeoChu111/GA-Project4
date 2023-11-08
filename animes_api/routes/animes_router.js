const express = require('express')
const router = express.Router()
const Anime = require('../models/anime')


router.get('/', (req, res) => {
    Anime.findAll()
        .then(animes => res.json(animes))
})

router.get('/seasonal', (req, res) => {
    Anime.findAllArticle()
        .then(details => res.json(details))
})
router.get('/:keyword', (req, res) => {
    Anime.findByKeyword(req.params.keyword)
        .then(animes => res.json(animes))
})
router.get('/:season/:year', (req, res) => {
    Anime.findAllBySeason(req.params.season, req.params.year)
        .then(animes => res.json(animes))
})
module.exports = router