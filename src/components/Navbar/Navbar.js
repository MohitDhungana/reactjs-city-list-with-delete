import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours" />
      <ul className="nav-link">
        <li>
          <a href="/" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-links">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-links active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
