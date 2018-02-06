import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const makeMovieItem = (movieObjects) => {
    return (
      movieObjects.map(m=>
        <div>
          <h2>{m.title}</h2>
          <p>Time: {m.time}</p>
          <p>Genres:
            {m.genres.map( g => <li>{g}</li>)}
          </p>
        </div>)
    )
  }


  return (
    <div>
      <h1>Movies Page</h1>
      {makeMovieItem(movies)}
    </div>
  );
};

export default Movies;
