import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './studentdashboardcss/ShiftingCourse.css';

function ShiftingCourse() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prevCourse, setPrevCourse] = useState('');
  const [newCourse, setNewCourse] = useState('');
  const [reasonShift, setReasonShift] = useState('');

  const navigate = useNavigate();

  const handleShiftingCourse = () => {
    if (firstName === '' || lastName === '' || prevCourse === '' || newCourse === '' || reasonShift === '') {
      alert('All fields are required');
    } else {
      alert('Request change of subject sent');
      navigate('/student-dashboard/home');
    }
  };

  const prevCourseOptions = [
    'Animation',
    'Web Dev',
    'Sys Dev',
    'Bscs',
  ];

  const newCourseOptions = [
    'Animation',
    'Web Dev',
    'Sys Dev',
    'Bscs',
  ];

  return (
    <div className="shift-form-container">
      <div className="shift-row">
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
        <div className="shift-column">
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
      <div className="shift-row">
        <div className="shift-column">
          <label htmlFor="prevCourse">Previous course*</label>
          <select
            id="prevCourse"
            name="input3"
            value={prevCourse}
            onChange={(e) => setPrevCourse(e.target.value)}
          >
            <option value="">Select Previous Course</option>
            {prevCourseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="shift-column">
          <label htmlFor="newCourse">New course*</label>
          <select
            id="newCourse"
            name="input4"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          >
            <option value="">Select New Course</option>
            {newCourseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="shift-row-last">
        <div className="shift-column-last">
          <label htmlFor="course">Reason for changing course*</label>
          <input
            type="text"
            id="course"
            name="input5"
            value={reasonShift}
            onChange={(e) => setReasonShift(e.target.value)}
          />
        </div>
      </div>
      <div className="button-group">
        <button onClick={handleShiftingCourse} className="submit-button">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default ShiftingCourse;
