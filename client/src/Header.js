// src/components/Header.js
import React from 'react';
import logo from './favicon.png' // Replace with path to your logo

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <img src={logo} alt="Logo" className="h-8" />
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-gray-300">Exams</a></li>
          <li><a href="/admin" className="text-white hover:text-gray-300">Admin</a></li>
          <li><a href="/patients" className="text-white hover:text-gray-300">Patients</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
