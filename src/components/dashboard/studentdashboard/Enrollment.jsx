import React, { useState } from 'react';
import './studentdashboardcss/Enrollment.css';


function Enrollment() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact_no, setNumber] = useState('');
  const [course, setSelectedCourse] = useState('');
  

  const courseOptions = [
    'Animation',
    'Web Dev',
    'Sys Dev',
    'Bscs',
  ];

  const handleEnrollment = () => {
    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      contact_no === '' ||
      course === ''
    ) {
      alert('All fields are required');
    } else {
      // Create an enrollment object to send to the server
      const enrollmentData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        contact_no: contact_no,
        course: course,
       

      };

      const yourToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJKb3BoZXIgSm9lIEdJSk9FU0hPVCIsImxhc3RuYW1lIjoiUmlibyIsImVtYWlsIjoiam9zaS5yaWJvLnVwQHBoaW5tYWVkLmNvbSIsImlkIjoiNjUxZmQxMTBmNzYxM2I4MzVhYTYxMjJiIiwiY29udGFjdF9ubyI6OTQ1NzQ0NTkyMSwiaWF0IjoxNjk2NTgzOTkzfQ.edBYpJJJ2Fx3W48Ljcy8DLWVgCH79wcGa9MmRWhacu8';
      
      // Send a POST request to the enrollment URL
      fetch('http://localhost:4000/enroll', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${yourToken}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(enrollmentData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Enrollment request successful:', data);
  })
  .catch((error) => {
    console.error('Error sending enrollment request:', error);
    alert('An error occurred while enrolling. Please try again.');
  })
        .catch((error) => {
          console.error('Error sending enrollment request:', error);
          alert('An error occurred while enrolling. Please try again.');
        });
    }
  };
  return (
    <div className="form-container">
      <div className="row">
        <div className="column">
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            id="firstname"
            name="input1"
            autoComplete="given-name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="column">
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            id="lastname"
            name="input2"
            autoComplete="family-name"
            value={lastname}
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
          <label htmlFor="contact_no">Phone Number*</label>
          <input
            type="text"
            id="contact_no"
            name="input4"
            value={contact_no}
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
            value={course}
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
