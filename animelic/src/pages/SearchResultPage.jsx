import { useState, useEffect } from 'react'
import '../App.css'
import * as AnimesApi from '../utils/anime_api'
import Anime from '../Anime'
import { Link, useParams } from 'react-router-dom'

export default function SearchResultPage() {
    const [animes, setAnimes] = useState([])
    let {keyword} = useParams();
    useEffect(() => {
        AnimesApi.findByKeyword(keyword)
          .then(res => res.json())
          .then(data => setAnimes(data))
    }, [])

    return (
        <>  
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