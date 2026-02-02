import React from 'react';
import './LandingNav.css';

const LandingNav = ({ onSignIn }) => {
  return (
    <nav className="landing-nav" aria-label="Main navigation">
      <div className="nav-container">
        <div className="brand">
          <div className="brand-logo" aria-hidden="true" />
          <h1 className="brand-name">The Seaside Bistro</h1>
        </div>

        <button 
          className="sign-in-btn"
          onClick={onSignIn}
          aria-label="Sign in to your account"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default LandingNav;