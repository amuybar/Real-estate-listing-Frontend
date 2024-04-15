// import React, { useState } from 'react';
import SearchForm from '../components/SearchBar/SearchForm';
import SearchResults from '../components/SearchBar/SearchResults';
import SortingOptions from '../components/SearchBar/SortingOptions';

const SearchPage = () => {
  // // Sample data for search results
  // const [properties, setProperties] = useState([
  //   {
  //     id: 1,
  //     image: '/property1.jpg',
  //     address: '123 Main Street',
  //     bedrooms: 3,
  //     bathrooms: 2,
  //     squareFootage: 2000
  //   },
  //   {
  //     id: 2,
  //     image: '/property2.jpg',
  //     address: '456 Oak Avenue',
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     squareFootage: 2500
  //   },
  //   // Add more properties as needed
  // ]);

  const handleSortChange = (e) => {
    // Implement sorting logic based on user selection
    console.log('Sorting by:', e.target.value);
  };

  return (
    <div className="searchPage">
      <h1>Find Your Dream Home</h1>
      <SearchForm />
      <SortingOptions handleSortChange={handleSortChange} />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
