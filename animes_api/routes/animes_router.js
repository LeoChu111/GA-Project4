const express = require('express')
const router = express.Router()
const Anime = require('../models/anime')


router.get('/', (req, res) => {
    Anime.findAll()
        .then(animes => res.json(animes))
})

router.get('/:keyword', (req, res) => {
    Anime.findByKeyword(req.params.keyword)
        .then(animes => res.json(animes))
})

module.exports = router