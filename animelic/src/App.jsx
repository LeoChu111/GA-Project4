import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'


function App() {
 

  return (
    <> 
      <nav class="navbar">
        <a href="/">Home</a>
        <a href="">Anime News</a>
        <a href="">Latest Anime</a>
        <a href="">Past Anime</a>
        <input type="text" placeholder='search anime by name'/>
      </nav>
      <HomePage />
    </>
  )
}

export default App
