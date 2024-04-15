import React, { useState } from 'react';
import BackendService from '../services/Services_api';
import '../styles/SellPage.css';




const SellProperty = () => {
  const [formData, setFormData] = useState({
    address: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    amenities:'',
    description: '',
    images: [],
  });
// TODO: Solve the error when submiting form , Am recing 400 error and i am to solve late TODO: Context: Am to debbug from the backend ,review how to pic the image maybe after the form is submitted, you can refrence them with form id(formdata)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'images' ? files : value, // Handle images separately
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const formData = new FormData();
  
      // Loop through form fields and add them to formData
      for (const field in formData) {
        if (formData.hasOwnProperty(field)) { // Check if field is a property of formData
          const element = document.getElementById(field);
          if (element) { // Check if element exists
            formData.append(field, element.value);
          } else {
            console.warn(`Element with id "${field}" not found in DOM`);
          }
        }
      }
  
      await BackendService.submitProperty(formData);
      setSuccess('Property details submitted successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  
  return (
    <div className="sell-property">
      <h2>Sell Your Property</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
        <label htmlFor="bedrooms">Bedrooms:</label>
        <input type="number" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required />
        <label htmlFor="bathrooms">Bathrooms:</label>
        <input type="number" id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required />
        <label htmlFor="squareFootage">Square Footage:</label>
        <input type="number" id="squareFootage" name="squareFootage" value={formData.squareFootage} onChange={handleChange} required />
        <label htmlFor="amenities">Amenities (separate by commas):</label>
        <input type="text" id="amenities" name="amenities" value={formData.amenities} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        <label htmlFor="images">Images:</label>
        <input type="file" id="images" name="images" multiple onChange={handleChange} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Sell Your Property'}
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default SellProperty;
