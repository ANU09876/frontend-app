// App.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file
const BASE_URL=process.env.BASE_URL

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedBatch: '',
    fee: '500',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };
  const clearFormData = () => {
    setFormData({
      name: '',
      age: '',
      selectedBatch: '',
      fee: '500',
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log(formData);
    try {
      if (formData.age < 18 || formData.age > 65) {
        alert('Age must be between 18 and 65.');
        return;
      }
      const response = await axios.post('https://server-kamt.onrender.com/create', formData);

      console.log(response.data);
      clearFormData();
    
    } catch (error) {
      console.error(error);
    }
  
  
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#fff', marginBottom: '20px' }}>Yoga Class Admission Form</h1>
      <a style={{color:'yellow'}} href={'https://server-kamt.onrender.com/get-records'} target="_blank" rel="noopener noreferrer"
>View students List</a>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }} onSubmit={handleSubmit}>
        <label style={{color:'white', marginBottom: '10px' }}>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ padding: '5px', margin: '5px' }} />
        </label>
        <label style={{ color:'white',marginBottom: '10px' }}>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required style={{ padding: '5px', margin: '5px' }} />
        </label>
        <label style={{ color:'white',marginBottom: '10px' }}>
          Select Batch:
          <select name="selectedBatch"value={formData.selectedBatch} onChange={handleChange} required style={{ padding: '5px', margin: '5px' }}>
            <option value="">Select Batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
        {formData.selectedBatch && (
          <label style={{ marginBottom: '10px', color: '#fff' }}>
            Fee: 500
          </label>
        )}
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
