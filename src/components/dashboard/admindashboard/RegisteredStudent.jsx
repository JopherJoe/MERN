import React, { useEffect, useState } from 'react';
import './admindashboardcss/Table.css';


function Registration() {
  const [registeredStudent, setRegisteredStudent] = useState([
  ]);

  useEffect(() => {
    fetch('http://localhost:4000/todos/get')
      .then((response) => response.json())
      .then((data) => {
        setRegisteredStudent(data);
      })
      .catch((error) => console.error('Error fetching shiftee student data: ', error));
  }, []);
  

  return (
    <div className="centered">
      <p>Total Registered Students: {registeredStudent.length}</p>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {registeredStudent.map(student => (
            <tr key={student.id}>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.email}</td>
              <td>{student.contact_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Registration;
