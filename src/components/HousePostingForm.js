import React, { useState } from 'react';
import axios from 'axios';

const HousePostingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    // Add more fields as needed
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
       await axios.post('https://real-estate-listing-backend.onrender.com/rent', formData);
      setSuccess('House posted successfully!');
    } catch (err) {
      setError(err.message || 'An error occurred while posting the house');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Post Your House for Rent</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        {/* Add more fields as needed */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Posting...' : 'Post'}
        </button>
        <button type="button" onClick={onClose}>
          Close
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default HousePostingForm;
