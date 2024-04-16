import React from 'react';


const ListingCard = ({ data }) => {
  if (!data) {
    return null;
  }

  const { image, address, price} = data;

  return (
    <a href='/'><div className="featured-listing">
      <img src={image} alt={address} />
      <div className="listing-details">
        <h3>{address}</h3>
        <p>${price}</p>
        
      </div>
    </div></a>
  );
};

export default ListingCard;
