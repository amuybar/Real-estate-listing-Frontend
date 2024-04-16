import React from 'react';
import '../styles/ChooseUsSection.css';
import { FaHome, FaInfinity, FaMoneyBill } from 'react-icons/fa';


const Advantage = ({ icon, title, description }) => {
  return (
    <div className="advantage">
      <div className="step-i">{[icon]}</div>
      <div className='adv-content'><h3>{title}</h3>
      <p>{description}</p></div>
    </div>
  );
};

const ChooseUsSection = () => {
  const advantages = [
    { icon: <FaHome/>, title: 'Wide Range of Listings', description: 'Find your ideal property from our extensive collection.' },
    { icon: <FaMoneyBill/>, title: 'Lowest Commission', description: 'Find your ideal property from our extensive collection.' },
    
    { icon: <FaInfinity/>, title: 'Property Insuarance', description: 'Find your ideal property from our extensive collection.' },
    
    
  ];

  return (
    <section >
      <h2>Why Choose Us?</h2>
     <div className="choose-us-section"> <div className="video-container">
        {/* Include your video component here */}
        <iframe
          width="400"
          height="400"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="advantages-container">
        {advantages.map((advantage) => (
          <Advantage key={advantage.title} {...advantage} />
        ))}
      </div></div>
    </section>
  );
};

export default ChooseUsSection;
