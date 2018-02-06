import React from 'react';
import { actors } from '../data';

const ActorItem = (props) => {
  const movies = props.actor.movies.map((m) => <li>{m}</li>);

  return(
    <div>
      <h2>Name: {props.actor.name}</h2>
      <p>Movies:</p>
      <ul>
        {movies}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        {actors.map(d => <ActorItem key={d.title} actor={d}/>)}
    </div>
  );
};

export default Actors;
