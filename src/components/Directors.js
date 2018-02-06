import React from 'react';
import { directors } from '../data';

const DirectorItem = (props) => {
  const movies = props.director.movies.map((m) => <li>{m}</li>);

  return(
    <div>
      <h2>Name: {props.director.name}</h2>
      <p>Movies:</p>
      <ul>
        {movies}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        {directors.map(d => <DirectorItem key={d.title} director={d}/>)}
    </div>
  );
};

export default Directors
