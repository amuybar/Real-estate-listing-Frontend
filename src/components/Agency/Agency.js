
import React from 'react';
import './Agency.css';

const Agency = () => {
  return (
    <div className="agency">
      <h2>Our Partnered Agencies</h2>
      <div className="agency__list">
        {/* Agency items go here */}
        <div className="agency__item">
          <img src="/images/by.jpg" alt="Agency 1" />
          <h3>Morgage Return</h3>
          <p>Description of Agency 1</p>
          <button className='btn-a'>View</button>
        </div>
        <div className="agency__item">
          <img src="/images/inv.jpg" alt="Agency 2" />
          <h3>Home Make Agency</h3>
          <p>Description of Agency 2</p>
          <button className='btn-a'>View</button>
        </div>
        {/* Add more agency items as needed */}
      </div>
    </div>
  );
};

export default Agency;
