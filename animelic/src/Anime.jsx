


export default function Anime({anime}) {

    return (
      <div className="anime-wrapper">
        <h1>Anime in Summer 2023</h1>
        <article>
            <h1>{anime.summary}</h1>
            <p>{anime.summary}</p>
            <aside>
                <img src={anime.poster} alt="" />
            </aside>
            <a href={anime.official_link}>Official Website</a>
            <a href={anime.trailer}>PV</a>
        </article>  
        <footer>
            
        </footer>    
      </div>
    )
}