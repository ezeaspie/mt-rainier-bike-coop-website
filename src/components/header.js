import React from "react";
import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Header = () => (
  <header>
      <nav>
        <div className="navigation-logo-container">
          <Link to="/"><img src="./images/logo.png" alt="logo" /></Link>
          <Link to="/">
            <h1 style={{ margin: 0 }}>
            Mt. Rainier Bike Co-op
            </h1>
          </Link>
        </div>
        <ul className="navigation-links">
          <li><NavLink to="/bikes">Bikes for Sale</NavLink></li>
          <li><NavLink to="/#ue">Upcoming Events</NavLink></li>
          <li><NavLink to="/#c">Contact Us</NavLink></li>
          <li><Link to="/volunteers">Meet Our Core Volunteers</Link></li>
          <li><Link to="/communityEvents">Recent Events</Link></li>
        </ul>        
      </nav>
  </header>
)

export default Header
