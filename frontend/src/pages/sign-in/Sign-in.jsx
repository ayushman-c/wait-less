import React from 'react';
import { Link } from 'react-router-dom';

import './Sign-in.css';

const SignIn = () => {
  // Simple click handlers
  const handleGoogleSignIn = () => {
    console.log('Google Sign In clicked');
    // Add your Google auth logic here
  };

  const handleGuestContinue = () => {
    console.log('Continue as Guest clicked');
    // Navigate to menu as guest
  };

  return (
    <div className="signin-page">
      {/* Left Side - Image Panel */}
      <div className="signin-left">
        <div className="left-overlay">
          <h1 className="left-title">Taste the extraordinary.</h1>
          <p className="left-subtitle">
            Experience local favorites and curated dishes delivered right to your table.
          </p>
        </div>
      </div>

      {/* Right Side - Auth Panel */}
      <div className="signin-right">
        <div className="auth-container">
          
          <div className="auth-header">
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">
              Choose how you'd like to continue with your digital menu experience.
            </p>
          </div>

          <div className="auth-buttons">
            <button 
              className="btn btn-google"
              onClick={handleGoogleSignIn}
            >
              <svg className="google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            <Link to="/menu" style={{ textDecoration: 'none' }}>
            <button 
              className="btn btn-guest"
              onClick={handleGuestContinue}
            >
              Continue as Guest
            </button>
            </Link>
          </div>

          <p className="terms-text">
            By continuing, you agree to our{' '}
            <a href="/terms" className="terms-link">Terms of Service</a>
            {' '}and{' '}
            <a href="/privacy" className="terms-link">Privacy Policy</a>.
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignIn;