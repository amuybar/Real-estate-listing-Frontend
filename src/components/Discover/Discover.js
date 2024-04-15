import React, { useState } from 'react';
import './Discover.css';

const Discover = () => {
  const [selectedOption, setSelectedOption] = useState('buy');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="discover">
      <h2>Discover how we Operate</h2>
      <div className="buttons">
        <button className={selectedOption === 'buy' ? 'active' : ''} onClick={() => handleOptionChange('buy')}>Buy</button>
        <button className={selectedOption === 'rent' ? 'active' : ''} onClick={() => handleOptionChange('rent')}>Rent</button>
        <button className={selectedOption === 'sell' ? 'active' : ''} onClick={() => handleOptionChange('sell')}>Sell</button>
      </div>
      <div className="card">
        {selectedOption === 'buy' && <p>Find out how much you can afford
            We'll help you estimate your budget range.
            Try our affordability calculator

            Understand your monthly costs
            Get an in-depth look at your monthly and closing costs.
            Try our mortgage calculator

            Get help with your down payment
            You may be able to buy a home with just 3.5% down.            </p>}
        {selectedOption === 'rent' && <p>
          Rent with the option to buy
           Lease from Home Partners of America with an option to buy.
        Check program availability

        Find out if it's better to rent or buy
        Determine if buying or renting makes more financial sense.
        Try our rent or buy calculator

        Save time with a renter profile
        Create a free renter profile to share with any landlor</p>}
        {selectedOption === 'sell' && <p>Buy now, sell later
        Get help from our partners to buy your new home before selling.
         Track your home value
         See your home’s RealEstimate℠ valuation information over time.
         Get offers for your home
         Visit Seller’s Marketplace to learn how you can sell without listing.</p>}
      </div>
    </div>
  );
};

export default Discover;
