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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



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
    <> 
      <div id="banner">
        <div id="banner-content">
          <h1>Animelic</h1>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
      <nav className="navbar">
          <Link to="/"><FontAwesomeIcon icon={faEnvelope} />Home</Link>
          <a href="">Anime News</a>
          <Link to="/LatestAnime">Latest Anime</Link>
          <Link to="/AnimeList">Anime List</Link>
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
    </>
  )
}

export default App
