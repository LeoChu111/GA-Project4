
import './App.css'

export default function Anime({anime}) {

    return (
      <div className="anime-wrapper">
        <h1>{anime.title}</h1>
        <p>{anime.summary}</p>
        <div className='anime-details'>
            <div className='links'>
                <a href={anime.official_link}>Official Website</a>
                <a href={anime.trailer}>PV</a>
            </div>

            <div>
                <aside>
                    <img src={anime.poster} alt="" />
                </aside>
                <article>
                    <h3>Staff</h3>
                    <p>Actor1: abc</p>
                    <p>Actor1: abc</p>
                    <p>Actor1: abc</p>
                    <h3>Cast</h3>
                    <p>Actor1: abc</p>
                    <p>Actor1: abc</p>
                    <p>Actor1: abc</p>
                    <p>Actor1: abc</p>
                    <p>Actor1: abc</p>
                </article>
            </div>
        </div>     
      </div>
    )
}