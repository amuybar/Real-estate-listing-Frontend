import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom for programmatic navigation
import BackendService from '../../services/Services_api'; 
import './FeaturedListings.css';

const ListingDetails = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await BackendService.getListingData(); 
        setListings(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleListingClick = (listingId) => {
    // Navigate to detail page when a listing is clicked
    history(`/listingpage/${listingId}`);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (!listings.length) {
    return <p>No listing data found.</p>;
  }

  return (
    <div className="listings-container">
      <ul className="listings">
        {listings.map((listing) => (
          <li key={listing._id} className="listing-item" onClick={() => handleListingClick(listing._id)}> 
            <img src={listing.image} alt='' />
            <div className='overlay'>
              <h3>{listing.address}</h3>
              <p>{listing.price}</p> 
              <p>{listing.bedrooms} BR, {listing.bathrooms} BA</p>  
              <button className='viewButton'>View Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingDetails;
