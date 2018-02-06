import React from 'react';
import { directors } from '../data';

const Directors = () => {
  function handleDirectors() {
    return directors.map(director => {
      return(
        <div>
          {director.name}
          {director.movies.map(movie => <ul>{movie}</ul>)}
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {handleDirectors()}
    </div>
  );
}

export default Directors
