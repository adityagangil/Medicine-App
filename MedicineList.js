import React, { useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';
import './MedicineList.css';

const MedicineList = () => {
  const { medicines, addToCart } = useContext(MedicineContext);

  const handleAddToCart = (medicine) => {
    addToCart(medicine);
  };

  return (
    <div>
      {medicines.map((medicine, index) => (
        <div key={index}>
          <p>Name: {medicine.name}</p>
          <p>Description: {medicine.description}</p>
          <p>Price: {medicine.price}</p>
          <button onClick={() => handleAddToCart(medicine)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
