import React from 'react';
import './admindashboardcss/Table.css';

function RegisteredStudent() {
  const studentData = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', number: '09090909090', course: 'BSIT' },
    { id: 2, firstName: 'Juan', lastName: 'Dela cruz', email: 'juan@gmail.com', number: '09090909090', course: 'BSIT' },
    { id: 3, firstName: 'Angel', lastName: 'Locsin', email: 'angel@.com', number: '09090909090', course: 'BIST' },
    { id: 4, firstName: 'Sue', lastName: 'Ramirez', email: 'sueramirez.com', number: '09090909090', course: 'BSIT' },
  ];

  return (
    <div className="centered">
      <p>Total Registered Students: {studentData.length}</p>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.number}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegisteredStudent;
