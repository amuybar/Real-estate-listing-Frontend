import React from 'react';
import AgentCard from './AgentCard';
import '../styles/AgentCard.css';

const ConnectedtoAgentSection = () => {
  // Replace with your actual agents data
  const sampleAgents = [
    {
      image: '/images/agnts.jpg',
      name: 'Joseph Kamau',
      agency: 'Kamau and CO Experts',
      rating: 4.8,
      socialLinks: {
        facebook: 'https://www.facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe_realtor',
        instagram: 'https://www.instagram.com/johndoe_homes',
      },
    },
    {
      image: '/images/agents.jpg',
      name: 'Emily Kimuta',
      agency: 'Real Estate Experts',
      rating: 4.4,
      socialLinks: {
        facebook: 'https://www.facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe_realtor',
        instagram: 'https://www.instagram.com/johndoe_homes',
      },
    },
  ];

  return (
    <section className="connected-to-agent-section">
      <h2>Connect with a Dedicated Agent</h2>
      <p>Our experienced agents are here to help you find your dream home.</p>
      <div className="agents-container">
        {sampleAgents ? ( 
          sampleAgents.map((agent) => (
            <AgentCard key={agent.name} {...agent} />
          ))
        ) : (
          <p>Agent data is not available yet.</p>
        )}
      </div>
    </section>
  );
};

export default ConnectedtoAgentSection;
