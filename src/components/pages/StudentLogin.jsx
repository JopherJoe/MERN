import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './pagescss/StudentAdminLogin.css';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      window.localStorage.setItem("userType", "admin");
      const response = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/student-dashboard/home');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-page">
       <div className="login-box">
      <h2>login</h2>
      <form>
        <div className="input-group">
        <label className="label" htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
      <div className="input-group">
        <label className="label" htmlFor="password">Password:</label>
          <input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="button-group">
        <button type="button" onClick={handleLogin} className="login-button" >
          Sign In
        </button>
        </div>
        </form>
        <div>
        <Link to="/forgot-password" className="small-text">
            <p className="small-text">Forgot Password?</p>
          </Link>
        </div>
        <div className="button-group">
        <Link to="/student-create-account" className="create-account-button" >Create Account</Link>
        </div>
        </div>
     </div>
  
  );
}

export default StudentLogin;
