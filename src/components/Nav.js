import React, { useState, useEffect } from 'react';
import '../styles/Nav.css'; 

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showMenu && !event.target.closest('.navbar__links')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleRegister = () => {
    window.location.href = '/register';
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/images/logo.png" alt="Logo" />
        <h1>Real Estate Listings</h1>
      </div>
      <div className="navbar__links">
        <ul className={showMenu ? 'menu show' : 'menu'}>
          <li><a href="/">Home</a></li>
          <li><a href="/buy">Buy</a></li>
          <li><a href="/rent">Rent</a></li>
          <li><a href="/sell">Sell</a></li>
          <li><a href="/pre-approval">Pre-Approval</a></li>
          <li><a href="/find-agent">Find an Agent</a></li>
          <li><a href="/search">Search Now</a></li>
          <div className='auth'>
            <button className='register'onClick={handleRegister} >Register</button>
            <button className='login' onClick={handleLogin}>Login</button>
          </div>
        </ul>
        <div className="menuIcon" onClick={toggleMenu}>
          <div className={showMenu ? 'bar open' : 'bar'}></div>
          <div className={showMenu ? 'bar open' : 'bar'}></div>
          <div className={showMenu ? 'bar open' : 'bar'}></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
