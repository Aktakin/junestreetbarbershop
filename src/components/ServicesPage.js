import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAllServicesClick = () => {
    navigate('/all-services');
  };

  return (
    <div className="services-page">
      <button className="back-button" onClick={handleBackClick}>
        ← Back to Home
      </button>
      <div className="services-content">
        <div className="services-left">
          <div className="services-logo">Services</div>
          <h1 className="services-title">Popular Services</h1>
          <button className="services-button" onClick={handleAllServicesClick}>
            all services
          </button>
        </div>
        
        <div className="services-right">
          <p className="services-description">
            Experience the finest in traditional barbering at June Street. Our skilled barbers provide expert grooming services, personalized consultations, and professional styling that will help you look and feel your best. From classic cuts to modern styles, we're dedicated to delivering exceptional service with attention to detail and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
