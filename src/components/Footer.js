// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white py-3 mt-auto">
    <div className="container text-center">
      <p className="mb-0">&copy; {new Date().getFullYear()} MonBot. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
