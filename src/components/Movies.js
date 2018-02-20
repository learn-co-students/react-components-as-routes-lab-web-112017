import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m => (
        <div key={m.title}>
          <h4>{m.title}</h4>
          <p>Time: {m.time}</p>
          <ul>{m.genres.map(g => <li key={g}>{g}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
