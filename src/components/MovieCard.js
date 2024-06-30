import React from "react";
import "../styles.css";
export default function MovieCard({ movie, iswatchlisted, toggleWatchlist }) {
  const getratingcolour = (rating) => {
    if (rating > 8) {
      return "rating-good";
    } else if (rating > 5) {
      return "rating-ok";
    }
    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img src={`images/${movie.image}`} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span
            className={`movie-card-rating ${getratingcolour(movie.rating)}`}
          >
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={iswatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          />

          <span className="slider">
            <span className="slider-label">
              {iswatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
