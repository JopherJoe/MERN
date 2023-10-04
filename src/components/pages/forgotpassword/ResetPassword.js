import React, { useState } from 'react';
import axios from 'axios';
import '../forgotpasswordcss/ResetPassword.css';


function ResetPassword({ match }) {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`https://localhost:3000/api/reset-password/${match.params.token}`, {
        newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Invalid or expired token');
    }
  };

  return (
<div className="container">
    <div className="box">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  </div>
  );
}

export default ResetPassword;