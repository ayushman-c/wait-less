import React, { useState } from 'react';
import './MenuNav.css';

const categories = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'main', label: 'Main Course' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Desserts' }
];

const MenuNav = ({ activeCategory = 'breakfast', onCategoryChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="menu-nav" aria-label="Menu categories">
      <div className="menu-nav-container">
        
        {/* Top Row: Logo + User */}
        <div className="menu-nav-header">
          <div className="brand">
            <div className="brand-logo" aria-hidden="true" />
            <span className="brand-name">The Seaside Bistro</span>
          </div>
          
          <div className="user-badge">
            <span className="user-label">GUEST</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu categories"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Category Row */}
        <div className={`menu-nav-categories ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                onCategoryChange?.(cat.id);
                setIsMobileMenuOpen(false);
              }}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default MenuNav;