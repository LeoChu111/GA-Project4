import { useState, useEffect } from 'react'
import '../App.css'
import * as AnimesApi from '../utils/anime_api'
import Anime from '../Anime'
import AnimeSeasonArticle from '../AnimeSeasonArticle'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const [animes, setAnimes] = useState([])
    const [articles, setArticles] = useState([])
    useEffect(() => {
        AnimesApi.findAll()
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(data => {
            console.log(data);
          })
          .then(data => setAnimes(data))
          .catch(error => {
            console.error('Error:', error);
          });
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
                    animes={animes}
                    />
                )}
            </main>
        </>
    )
}
