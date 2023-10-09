import React, { useEffect, useState } from 'react';
import './admindashboardcss/Table.css';

function Enrollees() {
  const [enrollmentRequests, setEnrollmentRequests] = useState([
  ]);

  useEffect(() => {
    fetch('http://localhost:4000/enroll/get')
      .then((response) => response.json())
      .then((data) => {
        setEnrollmentRequests(data);
      })
      .catch((error) => console.error('Error fetching shiftee student data: ', error));
  }, []);

  return (
    <div className="centered">
      <p>Enrolled Student: {enrollmentRequests.length}</p>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {enrollmentRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.firstname}</td>
              <td>{request.lastname}</td>
              <td>{request.email}</td>
              <td>{request.contact_no}</td>
              <td>{request.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Enrollees;
