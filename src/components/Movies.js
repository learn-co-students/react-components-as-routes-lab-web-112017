import React from 'react';
import { movies } from '../data';

let movieCards = movies.map((mov)=>{
  return (
    <div>
      <p>{mov.title}</p>
      <p>{mov.time}</p>
      <p>{mov.metascore}</p>
      <p> Genres </p>
      <ul>
        {mov.genres.map((g)=><li>{g}</li>)}
      </ul>
    </div>)
})
const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movieCards}
    </div>
  );
};

export default Movies;
