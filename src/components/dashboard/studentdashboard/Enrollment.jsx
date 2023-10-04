import React, { useState } from 'react';
import './studentdashboardcss/Enrollment.css';
import { useNavigate } from 'react-router-dom';

function Enrollment() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(''); // Use selectedCourse instead of course

  const navigate = useNavigate();

  const courseOptions = [
    'Animation',
    'Web Dev',
    'Sys Dev',
    'Bscs',
  ];

  const handleEnrollment = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      number === '' ||
      selectedCourse === ''
    ) {
      alert('All fields are required');
    } else {
      alert('Enrollment request successfully');
      navigate('/student-dashboard/home');
    }
  };

  return (
    <div className="form-container">
      <div className="row">
        <div className="column">
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            name="input1"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="column">
          <label htmlFor="family-name">Last Name*</label>
          <input
            type="text"
            id="family-name"
            name="input2"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label htmlFor="email">Email Address*</label>
          <input
            type="text"
            id="email"
            name="input3"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="column">
          <label htmlFor="number">Phone Number*</label>
          <input
            type="text"
            id="number"
            name="input4"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label htmlFor="course">Course*</label>
          <select
            id="course"
            name="input5"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select a Course</option>
            {courseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="button-group">
        <button onClick={handleEnrollment} className="submit-button">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Enrollment;
