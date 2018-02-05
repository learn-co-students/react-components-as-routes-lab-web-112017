import React from 'react';
import { actors } from '../data';

let actorsElements = actors.map((act) => {
  return (
    <div>
      {act.name}
      <ul>
      {act.movies.map((mov)=><li>{mov}</li>)}
      </ul>
    </div>
      )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsElements}
    </div>
  )
}

export default Actors;
