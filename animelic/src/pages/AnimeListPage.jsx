import { useState, useEffect } from 'react'
import '../App.css'
import * as AnimesApi from '../utils/anime_api'
import Anime from '../Anime'
import AnimeSeasonArticle from '../AnimeSeasonArticle'
import { Link } from 'react-router-dom'

export default function AnimeListPage() {
    const [animes, setAnimes] = useState([])
    const [articles, setArticles] = useState([])
    useEffect(() => {
        AnimesApi.findAll()
          .then(res => res.json())
          .then(data => setAnimes(data))
    }, [])
    useEffect(() => {
        AnimesApi.findAllArticle()
          .then(res => res.json())
          .then(data => setArticles(data))
    }, [])
    
    return (
        <>
            <main>
                {articles.map(animeArticle => 
                    <AnimeSeasonArticle
                    key={animeArticle.id} 
                    animeArticle={animeArticle}
                    />
                )}
            </main>
        </>
    )
}
