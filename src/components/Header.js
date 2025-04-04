// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark text-white py-3">
    <div className="container d-flex justify-content-between align-items-center">
      <h1 className="mb-0">
        <Link to="/" className="text-white text-decoration-none">
          MonBot Dashboard
        </Link>
      </h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/clips">Clips</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/config">Configuration</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
