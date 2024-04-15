import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search a home.." className="searchInput" />
      <span className="searchIcon">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
};

export default SearchBar;
