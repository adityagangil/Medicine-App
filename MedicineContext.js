import React, { createContext, useState } from 'react';

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  return (
    <MedicineContext.Provider value={{ medicines, cart, addMedicine, addToCart }}>
      {children}
    </MedicineContext.Provider>
  );
};
