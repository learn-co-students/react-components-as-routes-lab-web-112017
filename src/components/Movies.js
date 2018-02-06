import React from 'react';
import { movies } from '../data';

const Movies = () => {
  function handleMovies(){
    return movies.map(movie => {
      return(
        <div>
          {movie.title}
          {movie.time}
          {movie.genres.map(genre => <ul>{genre}</ul>)}
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {handleMovies()}
    </div>
  );
};

export default Movies;
