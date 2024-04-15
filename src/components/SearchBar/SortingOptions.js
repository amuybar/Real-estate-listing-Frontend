import React from 'react';
import './SortingOptions.css';

const SortingOptions = ({ handleSortChange }) => {
  return (
    <div className="sortingOptions">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="dateAsc">Date: Oldest First</option>
        <option value="dateDesc">Date: Newest First</option>
        {/* Add additional sorting options as needed */}
      </select>
    </div>
  );
};

export default SortingOptions;
