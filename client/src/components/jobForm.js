// src/components/JobForm.js
import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    status: 'submitted',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/apply-job', formData);
      alert('Job applied successfully: ' + res.data._id);
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
      <input name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      <button type="submit">Apply</button>
    </form>
  );
};

export default JobForm;
