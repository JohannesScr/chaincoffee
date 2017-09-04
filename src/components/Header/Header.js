import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => (
  <header className="App-header">
    <div>
        <h2>Welcome to Chain Coffee</h2>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </div>
  </header>
);

export default Header;