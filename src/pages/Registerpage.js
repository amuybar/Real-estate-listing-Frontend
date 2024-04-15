import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

const BASE_URL = 'https://real-estate-listing-backend.onrender.com';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleContinue = () => {
    console.log('Setting showSecondCard to true');
    setShowSecondCard(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Perform registration logic here
       await axios.post(`${BASE_URL}/auth/register`, {
        username,
        email,
        password,
      });
      setSuccess('Registration successful!');
     
    } catch (err) {
      setError(err.message || 'An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  const validatePassword = (value) => {
    // Check if password contains at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    const mediumRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})'
    );

    if (strongRegex.test(value)) {
      setPasswordStrength('Strong');
    } else if (mediumRegex.test(value)) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Weak');
    }
  };
  
  return (

    <div className="register-screen">
      <div className={`auth-card`}>
        {showSecondCard ? (
          <>
          <p>Register</p>
            <h2>Step 2: Enter Password and Confirm Password</h2>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p>Password Strength: {passwordStrength}</p>
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      
           
          </>
        ) : (
          <>
             <h2>Step 1: Enter Username and Email</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleContinue}>Continue</button>
        <p>Have an Account ? <a href="/login">Login</a></p>
          </>
        )}
      </div>
    </div>
  );





    
};

export default RegisterScreen;
