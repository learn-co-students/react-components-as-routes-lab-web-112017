import React from 'react';
import { directors } from '../data';

const Directors = () => {
console.log(directors)
  const makeDirectorItem = (directorObjects) => {
    return (
      directorObjects.map(d=>
        <div>
          <h2>{d.name}</h2>
          <p>Movies:
            {d.movies.map( m => <li>{m}</li>)}
          </p>
        </div>)
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {makeDirectorItem(directors)}
    </div>
  )
}

export default Directors
