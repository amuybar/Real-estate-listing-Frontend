import React from 'react';
import '../styles/NewestDealSection.css'
const NewestDeal = ({ image, address, price, discount }) => {
  return (
    <div className="newest-deal">
      <img src={image} alt={address} />
      <div className="deal-details">
        <h3>{address}</h3>
        <p>
          ${price} <span className="discount">{discount}% Off</span>
        </p>
      </div>
    </div>
  );
};

const NewestDealSection = () => {
  const newestDeals = [
    {
      image: '/images/72.jpg',
      address: '123 Main Street',
      price: 500000,
      discount: 10,
    },
    {
      image: '/images/2.jpg',
      address: '456 Elm Avenue',
      price: 350000,
      discount: 5,
    },
    {
      image: '/images/23.jpg',
      address: '123 Main Street',
      price: 500000,
      discount: 10,
    },
    {
      image: '/images/22.jpg',
      address: '456 Elm Avenue',
      price: 350000,
      discount: 5,
    },
  ];

  return (
    <section className="newest-deal-section">
      <h2>Newest Deals!</h2>
      <div className="listings-container">
        {newestDeals.map((deal) => (
          <NewestDeal key={deal.address} {...deal} />
        ))}
      </div>
    </section>
  );
};

export default NewestDealSection;
