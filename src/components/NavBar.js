import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink
          to="/"
          exact
          activeStyle={{
            background: 'yellow'
          }}
        >Home</NavLink></li>

        <li><NavLink
          to="/movies"
          exact
          activeStyle={{
            background: 'yellow'
          }}
        >Movies</NavLink></li>

        <li><NavLink
          to="/directors"
          exact
          activeStyle={{
            background: 'yellow'
          }}
        >Directors</NavLink></li>

        <li><NavLink
          to="/actors"
          exact
          activeStyle={{
            background: 'yellow'
          }}
        >Actors</NavLink></li>
      </ul>
    </div>
    );
};

export default NavBar;
