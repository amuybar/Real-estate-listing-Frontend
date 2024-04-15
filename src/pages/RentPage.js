import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HousePostingForm from '../components/HousePostingForm.js'; 
import '../styles/Rent.css';


const RentPage = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHousePostingForm, setShowHousePostingForm] = useState(false); // State to control visibility of the house posting form

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      try {
        //TODO: remember to set this route
        const response = await axios.get('https://real-estate-listing-backend.onrender.com/rent');
        setListings(response.data);
      } catch (error) {
        setError(error.message || 'Error fetching rental listings');
      } finally {
        setIsLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handlePostHouse = () => {
    setShowHousePostingForm(true);
  };

  return (
    <div>
      {/* Button to open house posting form */}
      <button onClick={handlePostHouse}>Rent Your House</button>
      
      {/* House posting form */}
      {showHousePostingForm && <HousePostingForm onClose={() => setShowHousePostingForm(false)} />}
      
      {/* Rental listings */}
      <h1>RentPage</h1>
      {listings.map(listing => (
        <div key={listing.id}>
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
          <p>Price: {listing.price}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default RentPage;
