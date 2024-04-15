import React from 'react';

import './HeroSection.css';
import SearchBar from '../SearchBar/SearchBar';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__overlay">
        <h1>Welcome to Your Dream Home</h1>
        <p>Find the perfect property that suits your lifestyle.</p>
        <SearchBar/>
      </div>
    </div>
  );
};

export default HeroSection;
