
import './App.css'

export default function Anime({anime}) {

    return (
      <div className="anime-wrapper">
        <article>
            <h1>{anime.title}</h1>
            <a href={anime.official_link}>Official Website</a>
            <a href={anime.trailer}>PV</a>
            <p>{anime.summary}</p>
            <aside>
                <img src={anime.poster} alt="" />
            </aside>
        </article>  
        <footer>
            
        </footer>    
      </div>
    )
}