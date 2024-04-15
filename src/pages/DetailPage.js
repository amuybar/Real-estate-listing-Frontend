import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackendService from '../services/Services_api'; 


const DetailPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      setIsLoading(true);
      try {
        const data = await BackendService.getListingById(id); // Fetch listing details by ID
        setListing(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (!listing) {
    return <p>No listing found.</p>;
  }

  return (
    <div className="detail-page">
      <h2>{listing.address}</h2>
      <img src={listing.image} alt='' />
      <p>{listing.description}</p>
      <p>Price: {listing.price}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default DetailPage;
