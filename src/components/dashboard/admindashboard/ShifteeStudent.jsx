import React from 'react';
import './admindashboardcss/Table.css';


function ShifteeStudent() {
  const shifteeData = [
    { id: 1, firstName: 'John', lastName: 'Doe', prevCourse: 'BSIT', newCourse: 'BSN', reason: '' },
    { id: 2, firstName: 'Juan', lastName: 'Dela Cruz', prevCourse: 'BIST', newCourse: 'BSA', reason: '' },
    { id: 3, firstName: 'Angel', lastName: 'Locsin', prevCourse: 'BSIT', newCourse: 'BSCE', reason: '' },
  ];
  const handleApproveRequest = (request) => {
  };
  return (
    <div className="centered">
      <p>Total Shiftee Students: {shifteeData.length}</p>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Previous Course</th>
            <th>New Course</th>
            <th>Reason for Shifting</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shifteeData.map(student => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.prevCourse}</td>
              <td>{student.newCourse}</td>
              <td>{student.reason}</td>
              <td>
                <button onClick={() => handleApproveRequest()}>
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

export default ShifteeStudent;