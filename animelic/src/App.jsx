import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import LatestAnime from './pages/LatestAnime'
import { Link, Routes, Route } from 'react-router-dom';
import SeasonArticlePage from './pages/SeasonArticlePage';
import AnimeListPage from './pages/AnimeListPage';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, CardContent, CardMedia, Switch, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import SearchResultPage from './pages/SearchResultPage';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faHouse, faFire, faFilm } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate();
  
  function handleSearch(e) {
    e.preventDefault()
    navigate(`/${keyword}`)
    setKeyword("")
  }
  function handleChange(e) {
    setKeyword(e.target.value)
  }
  return (
    <div className='app'> 
      <div id="banner">
        <div id="banner-content">
          <img src="https://shorturl.at/eBGJR" alt="" />
          <h1>Animelic</h1>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
      <nav className="navbar">
          <Link to="/"><FontAwesomeIcon icon={faHouse} />Home</Link>
          <Link to="/"><FontAwesomeIcon icon={faNewspaper} />Anime News</Link>
          <Link to="/LatestAnime"><FontAwesomeIcon icon={faFire} />Latest Anime</Link>
          <Link to="/AnimeList"><FontAwesomeIcon icon={faFilm} />Anime List</Link>
          <form onSubmit={handleSearch}>
            <input type="text" placeholder='search anime by name' onChange={handleChange} value={keyword} />
          </form>
      </nav>
      <Routes>
          <Route exact path="/:keyword" element={<SearchResultPage />} />
          <Route exact path="/AnimeList" element={<AnimeListPage />} />
          <Route exact path="/:season/:year" element={<SeasonArticlePage />} />
          <Route exact path="/LatestAnime" element={<LatestAnime />} />
          <Route exact path="/" element={<HomePage />} />
      </Routes>
      <footer className='copyright'>
        <span>Copyright &copy; Leo Chu</span>
      </footer>
    </div>
    
  )
}

export default App
