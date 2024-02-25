import React from 'react';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/patients" className="nav-link">PatientPage</Link>
        </li>
        <li className="nav-item">
          <Link to="/reportwebvitals" className="nav-link">WebVitals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;