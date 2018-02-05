import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieMap = movies.map((movie) => {
        return (
          <div>
            <h2>{movie.title}</h2>
            <p>Runtime: {movie.time}</p>
            <p>Genres: {movie.genres.join(", ")}</p>
          </div>
        )
      })

  return (
    <div>
      <h1>Movies Page</h1>
      { movieMap }
    </div>
  );
};

export default Movies;
