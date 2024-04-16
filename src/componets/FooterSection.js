import React from 'react';
import '../styles/FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="newsletter-signup">
        <h3>Subscribe to our newsletter</h3>
        <form action="/">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="footer-links">
        <div className="column">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="/">Find a House</a>
            </li>
            <li>
              <a href="/">Find an Agent</a>
            </li>
            <li>
              <a href="/">Listings</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>Terms</h4>
          <ul>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Copyright & Security</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src="/images/logo.png" alt="Your Company Logo" />
        </div>
      </div>
      <div className="social-media">
  <a href="https://www.facebook.com/your-company-page">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com/your-company-profile">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.linkedin.com/company/your-company-name">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://www.instagram.com/your-company-account">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.tiktok.com/@your-company-username">
    <i className="fab fa-tiktok"></i> 
  </a>
</div>
      <div className="copyright">
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default FooterSection;
