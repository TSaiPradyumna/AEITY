import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('aeity-cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('aeity-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.name === product.name);
      if (exists) {
        return prev.map(p => p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p);
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  const updateQuantity = (name, qty) => {
    setCart(prev => prev.map(p => p.name === name ? { ...p, quantity: qty } : p));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
