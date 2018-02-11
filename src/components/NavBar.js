import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '1em',
  margin: '0 6px 6px',
  background: '#ff2348',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: '#FF5370'
        }}>Home</NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: '#FF5370'
        }}>Movies</NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: '#FF5370'
        }}>Directors</NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: '#FF5370'
        }}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
