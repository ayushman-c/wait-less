import { useState, useEffect } from 'react';
import { fetchDishesByCategory } from '../../api/menuApi';
import './MenuDisplay.css';

const MenuDisplay = ({ category }) => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDishes = async () => {
      setLoading(true);
      const data = await fetchDishesByCategory(category);
      setDishes(data);
      setLoading(false);
    };

    loadDishes();
  }, [category]);

  if (loading) return <div className="menu-loading">Loading menu...</div>;

  if (dishes.length === 0) {
    return (
      <div className="menu-empty">
        <h3>No items found</h3>
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
          </div>
        </article>
      ))}
    </div>
  );
};

export default MenuDisplay;