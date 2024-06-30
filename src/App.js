import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { MovieGrid } from './components/MovieGrid';
import { BrowserRouter as Router, Routes ,Route ,Link } from 'react-router-dom';
import WatchList from './components/WatchList';
import React, { useState, useEffect } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist]=useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  const toggleWatchlist=(movieId)=>{
    setWatchlist(prev=> 
      prev.includes(movieId)?prev.filter(id=>id!==movieId):[...prev,movieId]
      )
  }
  return (
    <div className="App">
      <div className='container'>
      <Header/>
      <Router>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
           
        </nav>
        <Routes>
        <Route path="/" element={<MovieGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} ></MovieGrid>}></Route>
        <Route path="/watchlist" element={<WatchList movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} ></WatchList>}></Route>
        </Routes>
      </Router>    
      
    
      </div>
      <Footer/>
    </div>
  );
}

export default App;
