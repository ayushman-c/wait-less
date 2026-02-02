import React from 'react';
import './Footer.css';

const contactInfo = {
  address: ['123 Ocean Drive', 'Santa Monica, CA 90401'],
  phone: '(555) 123-4567',
  email: 'hello@seasidebistro.com'
};

const hours = [
  { label: 'Mon-Fri:', time: '11am - 10pm' },
  { label: 'Sat-Sun:', time: '9am - 11pm' },
  { label: 'Happy Hour:', time: '4pm-6pm', highlight: true }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="brand-header">
            <svg className="brand-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 8V3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V8C13 9.65685 11.6569 11 10 11H6C4.34315 11 3 9.65685 3 8V3C3 2.44772 3.44772 2 4 2C4.55228 2 5 2.44772 5 3V8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8Z" fill="currentColor"/>
              <path d="M21 2C20.4477 2 20 2.44772 20 3V8C20 8.55228 19.5523 9 19 9H17C16.4477 9 16 8.55228 16 8V3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3V8C14 9.65685 15.3431 11 17 11H19C20.6569 11 22 9.65685 22 8V3C22 2.44772 21.5523 2 21 2Z" fill="currentColor"/>
              <path d="M6 13C5.44772 13 5 13.4477 5 14V22C5 22.5523 5.44772 23 6 23C6.55228 23 7 22.5523 7 22V14C7 13.4477 6.55228 13 6 13Z" fill="currentColor"/>
              <path d="M18 13C17.4477 13 17 13.4477 17 14V22C17 22.5523 17.4477 23 18 23C18.5523 23 19 22.5523 19 22V14C19 13.4477 18.5523 13 18 13Z" fill="currentColor"/>
              <path d="M12 13C11.4477 13 11 13.4477 11 14V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V14C13 13.4477 12.5523 13 12 13Z" fill="currentColor"/>
            </svg>
            <h3 className="brand-name">The Seaside Bistro</h3>
          </div>
          
          <p className="brand-tagline">
            Experience the finest coastal dining with a modern touch.
          </p>

          <div className="social-links">
            <a href="https://seasidebistro.com" className="social-icon" aria-label="Visit our website">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
            <a href="https://instagram.com/seasidebistro" className="social-icon" aria-label="Follow us on Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="footer-section">
          <h4 className="footer-heading">VISIT US</h4>
          <address className="footer-address">
            {contactInfo.address.map((line, index) => (
              <span key={index} className="address-line">{line}</span>
            ))}
            <span className="contact-line">{contactInfo.phone}</span>
            <a href={`mailto:${contactInfo.email}`} className="contact-line link">
              {contactInfo.email}
            </a>
          </address>
        </div>

        {/* Hours Section */}
        <div className="footer-section">
          <h4 className="footer-heading">HOURS</h4>
          <ul className="hours-list">
            {hours.map((item, index) => (
              <li key={index} className={`hour-item ${item.highlight ? 'highlight' : ''}`}>
                <span className="day-label">{item.label}</span>
                <span className="time-label">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2023 The Seaside Bistro. All rights reserved. Powered by DigitalMenu.
        </p>
      </div>
    </footer>
  );
};

export default Footer;