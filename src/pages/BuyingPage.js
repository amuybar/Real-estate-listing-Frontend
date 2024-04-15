import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Buying.css';

const BASE_URL = 'https://real-estate-listing-backend.onrender.com';

const BuyingPage = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/buy`, );
        setProperties(response.data);
      } catch (error) {
        setError(error.message || 'Error fetching properties for sale');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Buying Page</h1>
      {properties.map(property => (
        <div key={property.id}>
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>Price: {property.price}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default BuyingPage;
