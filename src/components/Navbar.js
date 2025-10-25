import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleServicesClick = () => {
    navigate('/services');
    setIsMenuOpen(false);
  };

  const handleAllServicesClick = () => {
    navigate('/all-services');
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate('/about');
    setIsMenuOpen(false);
  };

  const handleBookingsClick = () => {
    navigate('/bookings');
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={handleLogoClick}>
          <img src="/images/logo.png" alt="June Street Logo" className="logo-img" />
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}
            onClick={handleLogoClick}
          >
            Home
          </button>
          <button 
            className={`navbar-item ${location.pathname === '/services' ? 'active' : ''}`}
            onClick={handleServicesClick}
          >
            Services
          </button>
          <button 
            className={`navbar-item ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={handleAboutClick}
          >
            About
          </button>
          <button 
            className={`navbar-item ${location.pathname === '/bookings' ? 'active' : ''}`}
            onClick={handleBookingsClick}
          >
            Bookings
          </button>
          <button 
            className={`navbar-item ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={handleContactClick}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
