import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const makeActorObjects = (actorObjects) => {
    return (actorObjects.map(a=>
    <div>
      <h2>{a.name}</h2>
      <p> Movies:
        {a.movies.map(a=> <li>{a}</li>)}
      </p>
    </div>)
    )
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {makeActorObjects(actors)}
    </div>
  );
};

export default Actors;
