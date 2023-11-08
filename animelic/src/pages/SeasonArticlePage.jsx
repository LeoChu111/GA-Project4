import { useState, useEffect } from 'react'
import '../App.css'
import * as AnimesApi from '../utils/anime_api'
import Anime from '../Anime'
import { Link, useParams } from 'react-router-dom'

export default function SeasonArticlePage() {
    const [animes, setAnimes] = useState([])
    let {season, year} = useParams();
    console.log(season,year);
    useEffect(() => {
        AnimesApi.findAllBySeason(season, year)
          .then(res => res.json())
          .then(data => setAnimes(data))
    }, [])

    return (
        <>  
            <section className='animes-list'>
            <h1 className='title'>Anime in {season} {year}</h1>
            {animes.map(anime => 
                <Anime 
                key={anime.id} 
                anime={anime}
                />
            )}
            </section>
        </>
    )
}