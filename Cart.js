import React, { useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(MedicineContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
