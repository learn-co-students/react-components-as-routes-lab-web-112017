import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorInfo = actors.map(a => {
    return (
      <div>
        <h2>{a.name}</h2>
        <ul>
          {a.movies.map((m) => <li>{m}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      { actorInfo }
    </div>
  );
};

export default Actors;
