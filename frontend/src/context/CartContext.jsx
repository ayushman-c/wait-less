import React, { createContext, useContext, useState, useCallback } from 'react';

// Create context
const CartContext = createContext();

// Custom hook for easy access
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = useCallback((dish) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === dish.id);
      
      if (existing) {
        // Increase quantity if already in cart
        return prev.map(item =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // Add new item with quantity 1
      return [...prev, { ...dish, quantity: 1 }];
    });
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((dishId) => {
    setCartItems(prev => prev.filter(item => item.id !== dishId));
  }, []);

  // Update quantity
  const updateQuantity = useCallback((dishId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === dishId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Calculate totals
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    itemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};