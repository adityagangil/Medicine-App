import React from 'react';
import MedicineForm from './components/MedicineForm';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';
import { MedicineProvider } from './context/MedicineContext';

const App = () => {
  return (
    <MedicineProvider>
      <div>
        <MedicineForm />
        <MedicineList />
        <Cart />
      </div>
    </MedicineProvider>
  );
};

export default App;
