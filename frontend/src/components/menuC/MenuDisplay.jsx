import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { fetchDishesByCategory } from '../../api/menuApi';
import './MenuDisplay.css';

const MenuDisplay = ({ category }) => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 🔴 NEW: Get add function from context
  const { addToCart } = useCart();

  useEffect(() => {
    const loadDishes = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchDishesByCategory(category);
        setDishes(data);
      } catch (err) {
        setError('Failed to load menu. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadDishes();
  }, [category]);

  if (loading) return <div className="menu-loading">Loading menu...</div>;
  if (error) return <div className="menu-error">{error}</div>;

  if (dishes.length === 0) {
    return (
      <div className="menu-empty">
        <h3>No items in this category</h3>
        <p>Check back later for new additions!</p>
      </div>
    );
  }

  return (
    <div className="menu-display">
      {dishes.map(dish => (
        <article key={dish.id} className="dish-card">
          <img src={dish.image} alt={dish.name} loading="lazy" />
          
          <div className="dish-card-content">
            <div className="dish-card-header">
              <h3>{dish.name}</h3>
              <span className="dish-price">₹{dish.price}</span>
            </div>
            <p>{dish.description}</p>
            
            {/* 🔴 NEW: Add to Cart Button */}
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(dish)}
            >
              Add to Order
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default MenuDisplay;