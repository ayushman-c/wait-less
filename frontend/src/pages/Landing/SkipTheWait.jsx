import React from 'react';
import './SkipTheWait.css';

const steps = [
  {
    id: 1,
    title: 'Scan',
    description: 'Find the code on your table',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Select',
    description: 'Browse our digital menu',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Pay',
    description: 'Secure instant checkout',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    )
  }
];

const SkipTheWait = () => {
  return (
    <section className="skip-the-wait">
      <div className="skip-container">
        
        {/* Left Content */}
        <div className="content-side">
          <div className="badge">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>FAST & CONTACTLESS</span>
          </div>

          <h2 className="section-title">Skip the Wait</h2>
          
          <p className="section-description">
            Use our Quick Checkout feature to order and pay directly from your phone. 
            No need to flag down a server. Enjoy your meal on your own time.
          </p>

          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.id} className="step-card">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>

          <a href="#how-it-works" className="cta-button">
            Learn How It Works
          </a>
        </div>

        {/* Right Image Side */}
        <div className="image-side">
          <div className="phone-mockup">
            <img 
              src="https://www.asweetpeachef.com/wp-content/uploads/2014/04/easy-lobster-bisque-3.jpg" 
              alt="Phone displaying QR code for ordering" 
              className="phone-image"
            />
            
            <div className="notification-card">
              <div className="check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="notification-text">
                <strong>Order Placed!</strong>
                <span>Estimated time: 15 mins</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkipTheWait;