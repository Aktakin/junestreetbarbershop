import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-content">
          <h1 className="about-title">About June Street</h1>
          <p className="about-subtitle">Where tradition meets modern grooming excellence</p>
        </div>
      </div>
      
      <div className="about-story">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              At June Street Barbershop, we believe that grooming is an art form that has been passed down through generations. 
              Our skilled barbers combine time-honored techniques with contemporary innovations to deliver exceptional results 
              that exceed your expectations.
            </p>
            <p>
              Founded on the principles of quality, craftsmanship, and attention to detail, June Street has become a sanctuary 
              for gentlemen seeking the finest in traditional barbering services. We use only the finest products and tools, 
              carefully selected for their quality and effectiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;



