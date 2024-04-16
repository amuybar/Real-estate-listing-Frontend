import React from 'react';
import ListingCard from "./ListingCard";
import propertyData from '../data/data';
import '../styles/FeaturedSection.css';


const FeaturedSection = () => {
  return (
    <section className="featured-section">
      <h2>Featured Listings</h2>
      <div className="listings-container">
        {propertyData.map((listing) => (
          <ListingCard key={listing.id} data={listing} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
