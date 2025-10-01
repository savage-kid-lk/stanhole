import React, { useState, useEffect, useRef } from 'react';
import logo from '../media/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav" ref={menuRef}>
          <a href="#home" className="logo">
            <img src={logo} alt="Stanhole Trading & Projects Logo" className="logo-img" />
          </a>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Project</a></li>
            <li><a href="#clients" onClick={() => setIsMobileMenuOpen(false)}>Clients</a></li>
            <li><a href="#team" onClick={() => setIsMobileMenuOpen(false)}>Team</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
