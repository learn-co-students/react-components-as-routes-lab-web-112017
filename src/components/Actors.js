import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  const actorsArray = actors.map((a, i) => (
    <div key={i}>
      <h3>Name: {a.name}</h3>
      <h4>Movies:</h4>
      <ul>
        {a.movies.map((m, i) => (<li key={i}>{m}</li>))}
      </ul>
    </div>
  ))
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsArray}
    </div>
  );
};

export default Actors;
