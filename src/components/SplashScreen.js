import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log('Splash screen mounted');
    const timer = setTimeout(() => {
      console.log('Splash screen timer completed');
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="splash-content">
        <div className="logo-container">
          <div className="logo-circle">
            <img src="/images/logo.png" alt="June Street Logo" className="logo-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
