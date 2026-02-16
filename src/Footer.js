// src/Footer.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();
  const isDarkPage = location.pathname === '/' || location.pathname === '/find';

  return (
    <footer className={`custom-footer ${isDarkPage ? 'dark-footer' : ''}`}>
      <hr />
      <p>© 2026 Julia Mergel.</p>
    </footer>
  );
}

export default Footer;
