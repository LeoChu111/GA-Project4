
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

            <div className='grid-container'>
                <aside>
                    <img src={anime.poster} alt="" />
                </aside>
                <article>
                    <h3>Staff</h3>
                    <p>Producer: Ogura Mitsutoshi</p>
                    <p>Producer: Ishikawa Yoshihiro</p>
                    <p>Producer: Matsumoto Kazuki</p>
                    <p>Producer: Sasaki Yuusuke</p>
                    <h3>Cast</h3>
                    <p>Goblin Slayer: Umehara Yuuichirou</p>
                    <p>Onna Shinkan: Ogura Yui</p>
                    <p>Tsurugi no Otome: Endou Aya</p>
                    <p>Majo: Hikasa Youko</p>
                    <p>Ushikai Musume: Iguchi Yuka</p>
                </article>
            </div>
        </div>     
      </div>
    )
}