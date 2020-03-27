import React from 'react';
import logo from './image/Mod-4 Logo.PNG'
import logo2 from './image/another option.PNG'

const Home = () => (
  <div>
    <h1 id="header">Vid Hub Home's Page</h1>
    {/* <p>Please sign in to see all the available content</p> */}
    <img src={logo2} alt="vidhub"  className="photo"/>
  </div>
);

export default Home;