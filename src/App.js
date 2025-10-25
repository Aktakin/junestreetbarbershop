import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ServicesDetailPage from './components/ServicesDetailPage';
import AboutPage from './components/AboutPage';
import BookingsPage from './components/BookingsPage';
import ContactPage from './components/ContactPage';
import ImagePreloader from './components/ImagePreloader';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    console.log('Splash screen completed, showing main app');
    setShowSplash(false);
  };

  console.log('App render - showSplash:', showSplash);

  if (showSplash) {
    console.log('Rendering splash screen');
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  console.log('Rendering main app');
  return (
    <Router>
      <div className="App">
        <ImagePreloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/all-services" element={<ServicesDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
