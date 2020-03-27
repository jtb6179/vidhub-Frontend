import React from 'react';
import {NavLink} from 'react-router-dom'
import logo2 from './image/another option.PNG'


const NavBar = () => {
  return(
    <nav>
      <div className="nav-wrapper  ">
      
          <a href="#" className="brand-logo"><img src={logo2}className="photo" alt="vidhub" /></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                
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
            </div>
    </nav>
  )
};

export default NavBar;