import React, { useState } from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="hero-section">
     
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul className={`nav-links ${showMenu ? 'active' : 'menu'}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Featured</a></li>
          <li><a href="/">Service</a></li>
          <li><a href="/">Explore</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${showMenu ? 'active' : ''}`}></div>
          <div className={`menu-line ${showMenu ? 'active' : ''}`}></div>
          <div className={`menu-line ${showMenu ? 'active' : ''}`}></div>
        </div>
      </nav>

      
      <div className="content-container">
        <div className="hero-content">
          <h1>Find Your Dream Home Today</h1>
          <p>Explore a wide variety of properties and connect with experienced agents.</p>
          <button>Get Started</button>
        </div>
      </div>

      {/* Elevated card with search options */}
      <div className="search-card">
       <div className='search-filter' > 
       <label>Location</label>
       <select className="filter-dropdown">
          <option value="price">Nairobi</option>
          <option value="rooms">Mombasa</option>
          <option value="location">Kakamega</option>
        </select></div>
        <div className='search-filter' >
        <label>Property type</label>
          <select className="filter-dropdown">
          <option value="price">Single Room</option>
          <option value="rooms">Two rooms</option>
          <option value="location">Self Contained</option>
        </select></div>
        <div className='search-filter' >
          <label>Price Range</label>
           <select className="filter-dropdown">
          <option value="price">Price</option>
          <option value="rooms">Rooms</option>
          <option value="location">Location</option>
        </select></div>
        <button className="search-icon">Search</button>
      </div>
    </section>
  );
};

export default HeroSection;
