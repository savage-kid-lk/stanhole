import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <a href="#home" className="logo">
        STANHOLE <span>TRADING</span>
      </a>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="mobile-menu-btn">
        ☰
      </button>
    </nav>
  );
};

export default Navigation;