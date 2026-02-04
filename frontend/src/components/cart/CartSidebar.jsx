import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    itemCount,
    clearCart
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="cart-backdrop" onClick={onClose} />
      
      {/* Sidebar */}
      <aside className="cart-sidebar" aria-label="Shopping cart">
        <div className="cart-header">
          <h2>Your Order ({itemCount})</h2>
          <button 
            className="close-btn" 
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <button className="continue-btn" onClick={onClose}>
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <span className="item-price">${item.price}</span>
                  </div>
                  
                  <div className="item-actions">
                    <div className="quantity-control">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span className="total-price">${cartTotal.toFixed(2)}</span>
              </div>
              
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
              
              <button className="clear-btn" onClick={clearCart}>
                Clear Order
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartSidebar;