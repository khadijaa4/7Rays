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
          <Link to="/patientspage" className="nav-link">PatientPage</Link>
        </li>
        <li className="nav-item">
          <Link to="/adminpage" className="nav-link">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;