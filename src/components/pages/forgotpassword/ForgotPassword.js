import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../forgotpasswordcss/ResetPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/user/forgot-password', { email });
      setMessage(response.data.message);
      setError(''); // Clear any previous error messages
    } catch (error) {
      if (error.response) {
        // Server responded with an error (e.g., 404)
        setError('Email not found');
        console.error('Server error:', error.response.data); // Log server response data
      } else if (error.request) {
        // The request was made but no response received (network error)
        setError('Network error. Please try again later.');
        console.error('Network error:', error.request); // Log network request
      } else {
        // Something else went wrong
        setError('An error occurred. Please try again later.');
        console.error('Unhandled error:', error); // Log the error object
      }
      setMessage(''); // Clear any previous success messages
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Link to="/reset-password"><button type="submit">Reset Password</button></Link>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
