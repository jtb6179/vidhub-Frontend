  import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTwIoKtMHev-nvZ2dGTvEtra1TdH-leuCyY-3j-ThysVObCshd" alt="vidhub" />
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