import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="searchForm">
      <input type="text" placeholder="Location" />
      <input type="number" placeholder="Price Range" />
      <select>
        <option value="">Property Type</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="condo">Condo</option>
      </select>
      <select>
        <option value="">Bedrooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <select>
        <option value="">Bathrooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      {/* Additional filtering options */}
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchForm;
