import React from 'react';
import { directors } from '../data';

const Directors = () => {
  
  const directorsArray = directors.map((d,i) => (
    <div key={i}>
      <h3>Name: {d.name}</h3>
      <h4>Movies:</h4>
      <ul>
        {d.movies.map((m, i) => (<li key={i}>{m}</li>))}
      </ul>
    </div>
  ))
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArray}
    </div>
  );
}

export default Directors
