import React from 'react';
import {NavLink} from 'react-router-dom'
import logo2 from './image/another option.PNG'


const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <img src={logo2}className="photo" alt="vidhub" />
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;