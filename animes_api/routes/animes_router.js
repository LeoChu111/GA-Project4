const express = require('express')
const router = express.Router()
const cors = require('cors')
const Anime = require('../models/anime')


const allowlist = ['http://localhost:5173', 'https://animelic-x5pt.onrender.com']

const corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}


router.get('/', cors(corsOptionsDelegate), (req, res) => {
    Anime.findAll()
        .then(animes => res.json(animes))
})

router.get('/seasonal', cors(corsOptionsDelegate), (req, res) => {
    Anime.findAllArticle()
        .then(details => res.json(details))
})
router.get('/:keyword', cors(corsOptionsDelegate), (req, res) => {
    Anime.findByKeyword(req.params.keyword)
        .then(animes => res.json(animes))
})
router.get('/:season/:year', cors(corsOptionsDelegate), (req, res) => {
    Anime.findAllBySeason(req.params.season, req.params.year)
        .then(animes => res.json(animes))
})
module.exports = router