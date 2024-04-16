import React from 'react';
import { FaSearch, FaHandshake, FaTimes } from 'react-icons/fa';

const StepCard = ({ icon, title, description }) => {
  // Map icon names to corresponding icons
  const iconMap = {
    evaluate: <FaSearch />,
    deal: <FaHandshake />,
    close: <FaTimes />
  };

  return (
    <div className="step-card">
      <div className="step-icon">{iconMap[icon]}</div>
      <div className="step-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
