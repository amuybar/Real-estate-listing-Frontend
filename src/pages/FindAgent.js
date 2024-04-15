import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/FindAgentPage.css'; // Import your CSS file

const BASE_URL = 'https://real-estate-listing-backend.onrender.com';

const FindAgentPage = () => {
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${BASE_URL}/agents`);
        setAgents(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching agents');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const handleMailClick = (agentEmail) => {
    // Handle mail button click (e.g., open email client or display a message)
    console.log(`Sending email to agent: ${agentEmail}`);
  };

  return (
    <div className="find-agent-page">
      <h2>Find Your Perfect Agent</h2>
      {isLoading && <p>Loading agents...</p>}
      {error && <p className="error">{error}</p>}
      {agents.length > 0 ? (
        <ul className="agent-list">
          {agents.map((agent) => (
            <li key={agent.id}>
              <div className="agent-details">
                <h3>{agent.name}</h3>
                <p>{agent.title}</p>
                <p>{agent.bio}</p>
              </div>
              <button onClick={() => handleMailClick(agent.email)}>
                Contact Agent
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No agents found.</p>
      )}
    </div>
  );
};

export default FindAgentPage;
