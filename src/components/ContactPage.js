import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-content">
          <h1 className="contact-title">Contact Us</h1>
        </div>
      </div>
      
      <div className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Visit Us</h3>
              <p>4021 Beltline Rd Ste 208<br />Addison, TX 75001</p>
            </div>
            
            <div className="contact-card">
              <h3>Call Us</h3>
              <p>(214) 734-6304</p>
            </div>
            
            <div className="contact-card">
              <h3>Email Us</h3>
              <p>info@junestreet.com</p>
            </div>
            
            <div className="contact-card">
              <h3>Hours</h3>
              <p>Tuesday - Saturday: 10:00 AM - 7:00 PM<br />Sunday - Monday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
