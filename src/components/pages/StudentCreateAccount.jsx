import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './pagescss/StudentCreateAccount.css';

function StudentCreateAccountForm() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact_no, setContact_No] = useState('');

  const navigate = useNavigate();

  const handleCreateAccount = async () => {
    if (firstname === '' || lastname === '' || email === '' || password === '' || contact_no === '') {
      alert('All fields are required');
    } else {
      try {
        const response = await axios.post('http://localhost:4000/user/signup', {
          firstname,
          lastname,
          email,
          password,
          contact_no
        });
      
        // Check the response status
        if (response.status === 200) {
          // Registration success
          alert('Account created successfully');
          navigate('/student-login');;
        } else {
          // Registration failed, log the response data
          console.error('Registration failed. Response:', response.data);
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        console.log('Response data:', error.response.data); // Log the response data
        alert('Registration failed');
      }
    }
  }

  return (
    <div className="create-account-page">
    <div className="create-account-box">
      <h2>Create Account</h2>
      <form>
      <div className="input-group">
        <label className="label" htmlFor="firstname">First Name:</label>
          <input
            name="firstname"
            id="firstname"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}/>
            </div>
      <div className="input-group">
        <label className="label" htmlFor="lastname">Last Name:</label>
          <input
            name="lastname"
            id="lastname"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}/>
            </div>
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
      <div className="input-group">
        <label className="label" htmlFor="contact_no">Contact Number:</label>
          <input
            name="contact_no"
            id="contact_no" 
            type="text"  // Change "number" to "text"
            value={contact_no}
            onChange={(e) => setContact_No(e.target.value)}
          />
          </div>
      <div className="button-group">
        <button type="button"  onClick={handleCreateAccount} className="create-account-button">
          SUMBIT
        </button>
        </div>
      </form>
      <div className="button-group">
      <Link to="/student-login" className="login-button">Log in</Link>
      </div>
    </div>
    </div>
  );
}


export default StudentCreateAccountForm;
