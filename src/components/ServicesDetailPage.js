import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesDetailPage.css';

const ServicesDetailPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/services');
  };

  return (
    <div className="services-detail-page">
      <button className="back-button" onClick={handleBackClick}>
        ← Back to Services
      </button>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">Professional grooming with traditional techniques</p>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="services-cards-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-cards-grid">
            {/* Hair Cut Card */}
            <div className="service-card">
              <div className="card-image haircut">
                <div className="image-overlay"></div>
                <div className="card-content">
                  <h3 className="service-title">Hair Cut</h3>
                  <p className="service-description">Professional haircuts with modern techniques and traditional barbering skills.</p>
                  <div className="service-price">$35</div>
                </div>
              </div>
            </div>

            {/* Beard Trim Card */}
            <div className="service-card">
              <div className="card-image beard-trim">
                <div className="image-overlay"></div>
                <div className="card-content">
                  <h3 className="service-title">Beard Trim</h3>
                  <p className="service-description">Expert beard trimming and shaping to enhance your facial features and maintain a polished look.</p>
                  <div className="service-price">$25</div>
                </div>
              </div>
            </div>

            {/* Beard Care Card */}
            <div className="service-card">
              <div className="card-image beard-care">
                <div className="image-overlay"></div>
                <div className="card-content">
                  <h3 className="service-title">Beard Care</h3>
                  <p className="service-description">Complete beard care including washing, conditioning, and styling with premium products.</p>
                  <div className="service-price">$30</div>
                </div>
              </div>
            </div>

            {/* Hot Lather Shave Card */}
            <div className="service-card">
              <div className="card-image hot-shave">
                <div className="image-overlay"></div>
                <div className="card-content">
                  <h3 className="service-title">Hot Lather Shave</h3>
                  <p className="service-description">The ultimate luxury shaving experience with hot towels and traditional techniques.</p>
                  <div className="service-price">$45</div>
                </div>
              </div>
            </div>

            {/* Fade & Style Card */}
            <div className="service-card">
              <div className="card-image fade-style">
                <div className="image-overlay"></div>
                <div className="card-content">
                  <h3 className="service-title">Fade & Style</h3>
                  <p className="service-description">Modern fade techniques with precision styling for a contemporary look.</p>
                  <div className="service-price">$40</div>
                </div>
              </div>
            </div>

            {/* Mustache Trim Card */}
            <div className="service-card">
              <div className="card-image mustache">
                <div className="image-overlay"></div>
                <div className="card-content">
                  <h3 className="service-title">Mustache Trim</h3>
                  <p className="service-description">Specialized mustache grooming and styling to keep your facial hair looking sharp.</p>
                  <div className="service-price">$20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ServicesDetailPage;
