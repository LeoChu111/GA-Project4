import { useState, useEffect } from 'react'
import '../App.css'
import * as AnimesApi from '../utils/anime_api'
import Anime from '../Anime'

export default function HomePage() {
    const [animes, setAnimes] = useState([])

    useEffect(() => {

        AnimesApi.findAll()
          .then(res => res.json())
          .then(data => setAnimes(data))
    
    }, [])

    return (
        <>
            <h1>Animelic</h1>
            <section className='animes-list'>
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
