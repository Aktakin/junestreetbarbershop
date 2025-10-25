import React from 'react';
import './BookingsPage.css';

const BookingsPage = () => {
  const handleBookingClick = () => {
    // Handle booking action here
    alert('Please call (214) 734-6304 to book your appointment!');
  };

  return (
    <div className="bookings-page">
      <div className="bookings-hero">
        <div className="bookings-content">
          <div className="bookings-logo">Dark Beard</div>
          <h1 className="bookings-title">Book Your Appointment</h1>
        </div>
      </div>
      
      <div className="bookings-form-section">
        <div className="container">
          <div className="booking-form">
            <button className="book-button" onClick={handleBookingClick}>Bookings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;


