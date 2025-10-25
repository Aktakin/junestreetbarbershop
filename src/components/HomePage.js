import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLeftClick = () => {
    navigate('/services');
  };

  const handleBookingsClick = () => {
    setIsTransitioning(true);
    // Create a smooth transition effect
    setTimeout(() => {
      navigate('/bookings');
    }, 800);
  };

  return (
    <div className={`homepage ${isTransitioning ? 'transitioning' : ''}`}>
      {/* White Theme Section */}
      <div className="theme-section white-theme" onClick={handleLeftClick}>
        <div className="theme-overlay"></div>
        <div className="theme-content">
          <div className="theme-logo">CutStyle</div>
          <h1 className="theme-title">All Services</h1>
          <p className="theme-description">
            The theme is made in classic and fashionable nowadays tones of old hairdressers. A modern solution for your website.
          </p>
              <button className="theme-button">view services</button>
        </div>
      </div>

          {/* Book Appointment Section */}
          <div className="theme-section black-theme" onClick={handleBookingsClick}>
            <div className="theme-overlay"></div>
            <div className="theme-content">
              <div className="theme-logo">Dark Beard</div>
              <h1 className="theme-title">Bookings</h1>
              <p className="theme-description">
                Schedule your grooming session with our professional barbers. Experience the finest in traditional barbering.
              </p>
              <button className="theme-button">book now</button>
            </div>
          </div>
    </div>
  );
};

export default HomePage;
