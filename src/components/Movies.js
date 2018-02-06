import React from 'react';
import { movies } from '../data';

const MovieItem = (props) => {
  const genres = props.movie.genres.map((g) => <li>{g}</li>);

  return(
    <div>
      <h2>Name: {props.movie.title}</h2>
      <p>Time: {props.movie.time}</p>
      <p>Genres:</p>
      <ul>
        {genres}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(m => <MovieItem key={m.title} movie={m}/>)}
    </div>
  );
};

export default Movies;
