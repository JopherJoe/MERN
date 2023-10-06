import React, { useEffect, useState } from 'react';
import './admindashboardcss/Table.css';

function Enrollees() {
  const [enrollmentRequests, setEnrollmentRequests] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', number: '09090909090', selectedCourse: 'BSIT' },
    { id: 2, firstName: 'Juan', lastName: 'Dela cruz', email: 'juan@gmail.com', number: '09090909090', selectedCourse: 'BSIT' },
    { id: 3, firstName: 'Angel', lastName: 'Locsin', email: 'angel@.com', number: '09090909090', selectedCourse: 'BIST' },
    { id: 4, firstName: 'Sue', lastName: 'Ramirez', email: 'sueramirez.com', number: '09090909090', selectedCourse: 'BSIT' },
  ]);

  useEffect(() => {
    fetch('')
    .then((response) => response.json())
    .then((data) => setEnrollmentRequests(data))
    .catch((error) => console.error('Error fetching enrollment requests:', error));
}, []);

  const handleApproveRequest = (request) => {
    // Your API request logic here
    // ...
  };

  return (
    <div className="centered">
      <p>Enrollment Requests</p>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enrollmentRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.firstName}</td>
              <td>{request.lastName}</td>
              <td>{request.email}</td>
              <td>{request.number}</td>
              <td>{request.selectedCourse}</td>
              <td>
                <button onClick={() => handleApproveRequest(request)}>
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Enrollees;
