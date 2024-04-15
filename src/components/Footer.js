import React from 'react';
import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2022 Real Estate Agency</p>
        <p>All Rights Reserved</p>
        <div className="socialMedia">
          <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
