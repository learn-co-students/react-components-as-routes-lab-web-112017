import React from 'react';
import { movies } from '../data';

const general = {
  fontFamily:"Droid Serif",
  fontSize: "90%"
}

const box = {
  margin: "2.5em",
  padding: "1.5em",
  border:"groove",
  width: "255px"

}

const styles={
  fontFamily:"droid sans",
  fontSize:"5em"
}



const Movies = () => {

  return (
    <div style={general}>
      <h1 style={styles}>Movies Page</h1>
      {movies.map((m) => {
        return<div style={box}> <h3>{m.title}</h3>
        <span>Runtime: {m.time}</span>
        <ul>
          {m.genres.map((g) => {
            return <li>{g}</li>
          })}
        </ul>
      </div>
      })}
    </div>
  );
};

export default Movies;
