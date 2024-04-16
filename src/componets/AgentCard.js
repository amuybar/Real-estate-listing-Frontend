import React from 'react';

const AgentCard = ({ image, name, agency, rating, socialLinks }) => {
  
  const defaultImage = '/images/agents.jpg'; 

  return (
    <div className="agent-card">
      <img src={image || defaultImage} alt={name} />
      <div className="agent-details">
        <h3>{name}</h3>
        <p>{agency}</p>
        <div className="agent-rating">
          {/* Display rating using stars or a number */}
          {rating >= 5 && <i className="fas fa-star"></i>}
          {rating >= 4 && <i className="fas fa-star"></i>}
          {rating >= 3 && <i className="fas fa-star"></i>}
          {rating >= 2 && <i className="fas fa-star"></i>}
          {rating >= 1 && <i className="fas fa-star"></i>}
          <span>{rating}</span>
        </div>
        <div className="social-links">
          {socialLinks && (
            <>
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer noopener">
                  <i className="fab fa-facebook-f"></i>
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noreferrer noopener">
                  <i className="fab fa-twitter"></i>
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer noopener">
                  <i className="fab fa-instagram"></i>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
