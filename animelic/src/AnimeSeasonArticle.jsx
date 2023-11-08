import { useNavigate } from 'react-router-dom';
import './App.css'

export default function AnimeSeasonArticle({animeArticle, animes}) {
    const navigate = useNavigate();
    function handleClick(e) {
        navigate(`/${animeArticle.season}/${animeArticle.year}`);
    }
    return (
        <div className="article-wrapper">
            <img src="https://t.ly/8_Q16" onClick={handleClick} alt="" />
            <span>{animeArticle.season} bangumi {animeArticle.year}-{animeArticle.month} list</span>
        </div>
    )
}