import React, { useState } from 'react';
import axios from 'axios';
import '../styles/PreApprovalPage.css'; // Import your CSS file

const BASE_URL = 'https://real-estate-listing-backend.onrender.com';

const PreApprovalPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [income, setIncome] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('employed'); 
  
  const [employmentStatusOptions, setEmploymentStatusOptions] = useState([
    'employed',
    'self-employed',
    'unemployed',
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const data = {
        firstName,
        lastName,
        email,
        phone,
        income,
        employmentStatus,
      };

      const response = await axios.post(`${BASE_URL}/pre-aproved`, data);
      setSuccess(response.data.message || 'Pre-approval request submitted successfully!');
    } catch (err) {
      setError(err.message || 'An error occurred while submitting the request');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pre-approval-page">
      <h2>Get Pre-Approved for Your Dream Home</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="income">Annual Income:</label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="employmentStatus">Employment Status:</label>
          <select id="employmentStatus" value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)}>
            {employmentStatusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Get Pre-Approved'}
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default PreApprovalPage;
