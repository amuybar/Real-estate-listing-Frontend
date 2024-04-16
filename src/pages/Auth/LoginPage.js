import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

const BASE_URL = 'https://real-estate-listing-backend.onrender.com';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
       await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      setSuccess('Login successful!');
      window.location.href = '/';
    } catch (err) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-screen">
      <div className={`auth-card`}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
        <p>Forgot your password? <a href="/reset-password">Reset Password</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
