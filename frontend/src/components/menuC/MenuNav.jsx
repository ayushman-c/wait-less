import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartSidebar from '../cart/CartSidebar'; // 🔴 NEW
import './MenuNav.css';

const categories = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'main', label: 'Main Course' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Desserts' }
];

const MenuNav = ({ activeCategory = 'breakfast', onCategoryChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // 🔴 NEW
  const { itemCount } = useCart();

  return (
    <>
      <nav className="menu-nav" aria-label="Menu categories">
        <div className="menu-nav-container">
          
          <div className="menu-nav-header">
            <div className="brand">
              <div className="brand-logo" aria-hidden="true" />
              <span className="brand-name">The Seaside Bistro</span>
            </div>
            
            <div className="nav-actions">
              {/* 🔴 UPDATED: Click to open cart */}
              <button 
                className="cart-btn" 
                onClick={() => setIsCartOpen(true)}
                aria-label={`Cart with ${itemCount} items`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                {itemCount > 0 && (
                  <span className="cart-badge">{itemCount}</span>
                )}
              </button>
              
              <div className="user-badge">
                <span className="user-label">GUEST</span>
              </div>
            </div>

            <button 
              className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={`menu-nav-categories ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  onCategoryChange?.(cat.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </nav>

      {/* 🔴 NEW: Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default MenuNav;