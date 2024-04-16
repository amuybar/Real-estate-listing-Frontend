import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ResetPassword.css';

const BASE_URL = 'https://real-estate-listing-backend.onrender.com';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
// TODO: remember tocreate this end point
    try {
      await axios.post(`${BASE_URL}/reset-password`, {
        email,
      });
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'An error occurred during password reset');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-password-screen">
      <div className={`auth-card`}>
        {success ? (
          <>
            <h2>Check your email for reset link</h2>
          </>
        ) : (
          <>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
              {error && <p className="error">{error}</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
