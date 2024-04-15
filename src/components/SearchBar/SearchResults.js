import React from 'react';
import './SearchResults.css';

const SearchResults = ({ properties }) => {
  return (
    <div className="searchResults">
      {properties.map(property => (
        <div key={property.id} className="property">
          <img src={property.image} alt={property.address} />
          <div className="details">
            <h3>{property.address}</h3>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Square Footage: {property.squareFootage}</p>
          </div>
          <a href={`/property/${property.id}`} className="detailsLink">View Details</a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
