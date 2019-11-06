import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const d = new Date();

const currentYear = d.getFullYear();
const Footer = () => (
    <footer>
        <ul className="navigation-links">
          <li><NavLink to="/bikes">Bikes for Sale</NavLink></li>
          <li><NavLink to="/#ue">Upcoming Events</NavLink></li>
          <li><NavLink to="/#c">Contact Us</NavLink></li>
          <li><Link to="/volunteers">Meet Our Core Volunteers</Link></li>
        </ul>
        <a href="https://www.ezequielespinoza.dev/">© {currentYear}, Created by Ezequiel Espinoza</a>
    </footer>
)

export default Footer;
