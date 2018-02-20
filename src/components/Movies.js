import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  const moviesArray = movies.map((m, i) => ( 
    <div key={i}>
      <h3>Name: {m.title}</h3>
      <h4>Time: {m.time}</h4>
      <ul>Genres:
        {m.genres.map((g, i) => (<li key={i}>{g}</li>))}
      </ul>
    </div>
  ))
  
  return (
    <div> 
      <h1>Movies Page</h1>
      {moviesArray}
    </div>
  );
};

export default Movies;
