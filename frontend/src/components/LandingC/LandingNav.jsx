import React from 'react';
import { Link } from 'react-router-dom';
import './LandingNav.css';

const LandingNav = ({ onSignIn }) => {
  return (
    <nav className="landing-nav" aria-label="Main navigation">
      <div className="nav-container">
        <div className="brand">
          <div className="brand-logo" aria-hidden="true" />
          <h1 className="brand-name">The Seaside Bistro</h1>
        </div>
        <Link to="/sign-in" style={{ textDecoration: 'none' }}>
        <button 
          className="sign-in-btn"
          
          aria-label="Sign in to your account"
        >
          Sign In
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNav;