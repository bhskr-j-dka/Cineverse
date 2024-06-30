import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export function MovieGrid({movies,watchlist, toggleWatchlist}) {

  const [searchTerm, setSearchTerm] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };
  const matchesGenre = (movies, genre) => {
    return (
      genre === "All Genres" ||
      movies.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const matchSearchTerm = (movies, searchTerm) => {
   return movies.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
  const matchesRating = (movies, rating) => {
  switch(rating){
    case "All":
      return true;
    case "Good":
      return  movies.rating > 8;
    case "Ok":
      return movies.rating > 5 && movies.rating < 8;
    case "Bad":
      return movies.rating < 5;
    default:
      return false;
  }

  }

  const filteredMovies = movies.filter((movies) =>
    matchSearchTerm(movies, searchTerm) &&
     matchesGenre(movies,genre) &&
    matchesRating(movies, rating)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genres</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenre}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select 
          className="filter-dropdown"
          value={rating}
          onChange={handleRating}>
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} 
          key={movie.id}
          toggleWatchlist={toggleWatchlist}
          iswatchlisted={watchlist.includes(movie.id)}></MovieCard>
        ))}
      </div>
    </div>
  );
        }
