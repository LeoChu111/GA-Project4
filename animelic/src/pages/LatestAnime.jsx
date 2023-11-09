import { useState, useEffect } from 'react'
import '../App.css'
import * as AnimesApi from '../utils/anime_api'
import Anime from '../Anime'
import { Link } from 'react-router-dom'

export default function LatestAnime() {
    const [animes, setAnimes] = useState([])

    useEffect(() => {

        AnimesApi.findAllBySeason('Autumn', 2021)
          .then(res => res.json())
          .then(data => setAnimes(data))
    
    }, [])

    return (
        <>  
            <section className='animes-list'>
            <h1 className='title'>Newest Anime</h1>
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