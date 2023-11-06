import React, { useContext, useState } from 'react';
import { MedicineContext } from '../context/MedicineContext';
import './MedicineForm.css';

const MedicineForm = () => {
  const { addMedicine } = useContext(MedicineContext);
  const [medicine, setMedicine] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine(medicine);
    setMedicine({ name: '', description: '', price: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={medicine.name} onChange={handleInputChange} placeholder="Medicine Name" />
        <input type="text" name="description" value={medicine.description} onChange={handleInputChange} placeholder="Description" />
        <input type="text" name="price" value={medicine.price} onChange={handleInputChange} placeholder="Price" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default MedicineForm;
