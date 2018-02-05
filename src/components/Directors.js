import React from 'react';
import { directors } from '../data';

let dirs = directors.map((dir) => {
  return (
    <div>
      {dir.name}
      <ul>
      {dir.movies.map((mov)=><li>{mov}</li>)}
      </ul>
    </div>
      )
})
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {dirs}
    </div>
  );
}

export default Directors
