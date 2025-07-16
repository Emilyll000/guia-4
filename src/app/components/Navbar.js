'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import '../styles/navbar.css';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <h1>Mi Tienda</h1>
      <button className="cart-button" onClick={() => setShowCart(!showCart)}>
        🛒 Carrito ({cart.length})
      </button>

      {showCart && (
        <div className="cart-dropdown">
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <p>{item.title} - ${item.price}</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
                </div>
              ))}
              <button onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;