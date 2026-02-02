import React from 'react';
import './MenuSection.css';
import { menuItems } from './menuData';

const MenuSection = ({ onAddToOrder }) => {
  return (
    <section className="menu-section" aria-label="Featured menu items">
      <div className="menu-container">
        <h2 className="menu-title">Chef's Selections</h2>
        
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard 
              key={item.id} 
              item={item} 
              onAdd={() => onAddToOrder(item)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Single reusable card component
const MenuCard = ({ item, onAdd }) => {
  return (
    <article className="menu-card">
      <div className="card-image-wrapper">
        <img 
          src={item.image} 
          alt={item.name} 
          className="card-image"
          loading="lazy"
        />
        <span className="price-tag">${item.price}</span>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-description">{item.description}</p>
        <button 
          className="add-button"
          onClick={onAdd}
          aria-label={`Add ${item.name} to order`}
        >
          Add to Order
        </button>
      </div>
    </article>
  );
};

export default MenuSection;