import React from 'react';
import './CallToAction.css';


const handleMailClick = () => {
  const DeveloperEmail = 'odaribq@gmail.com';
  window.location.href = `mailto:${DeveloperEmail}`;
};

const CallToAction = () => {
  return (
    <div className="callToAction">
      <button className="ctaButton" onClick={handleMailClick}>Contact Us</button>
    </div>
  );
};

export default CallToAction;
