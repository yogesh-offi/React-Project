import React, { useState } from 'react';
import '../css/Contact.css';

const ContactForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
      <div className='bodys'>
    <div className="container">
          <div className='logos'>
          </div>
        <h2 className='head'>VP COURIER SERVICES</h2>
      <form onSubmit={handleSubmit} className='forms'>
        <h2 className='conta'>Contact Us</h2>
        <label htmlFor="name" className='labelna'>Name:</label>
      <input type="text" id="name" name="name" className="inputs" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email" className='labelna'>Email:</label>
        <input type="email" id="email" name="email" className="inputs" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message" className='labelna'>Message:</label>
        <textarea id="message" name="message" className="inputs" value={formData.message} onChange={handleChange} rows="4" required />

        <button type="submit" className='buttonp'>Submit</button>
      </form>
    </div>
      </div>
  );
};

export default ContactForm;
