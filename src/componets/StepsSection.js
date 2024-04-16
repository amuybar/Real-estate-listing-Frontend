import React from 'react';
import StepCard from './StepCard';
import '../styles/StepsSection.css';


const StepsSection = () => {
  const steps = [
    { icon: "evaluate", title: "Evaluate Property", description: "Lorem ipsum dolor sit amet." },
    { icon: "deal", title: "Meet your agent", description: "Lorem ipsum dolor sit amet." },
    { icon: "close", title: "Close the deal", description: "Lorem ipsum dolor sit amet." }
  ];

  return (
    <section className="steps-section">
      <h2>Easy Steps to Finding Your Home</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
