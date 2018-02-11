import React from 'react';
import { directors } from '../data';


const styles={
  fontFamily:"droid sans",
  fontSize:"5em"
}

const Directors = () => {
  return (
    <div>
      <h1 style={styles}>Directors Page</h1>
      {directors.map((d) => {
        return <div>
         {d.name}
        <ul>
          {d.movies.map((m)=> {
            return <li>{m}</li>
          })}
        </ul>
      </div>
      })}
    </div>
  );
}

export default Directors
