import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorInfo = directors.map((d) => {
    return (
      <div>
        <h2>{d.name}</h2>
        <ul>
          {d.movies.map((m) => <li>{m}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      { directorInfo }
    </div>
  );
}

export default Directors
