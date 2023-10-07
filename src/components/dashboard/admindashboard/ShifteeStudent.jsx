
import './admindashboardcss/Table.css';
import React, {useState, useEffect } from 'react';


function ShifteeStudent() {
  const [shifteeData, setShifteeData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:4000/change/get-request')
      .then((response) => response.json())
      .then((data) => {
        setShifteeData(data);
      })
      .catch((error) => console.error('Error fetching shiftee student data:', error));
  }, []);


  const handleApproveRequest = (id, userEmail) => {
    fetch(`http://localhost:4000/change/approve-request/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Request approved:', data);
      })
      .catch((error) => {
        console.error('Error approving request:', error.message);
      });
  };

  const handleRejectRequest = (id) => {
    fetch(`http://localhost:4000/change/reject-request/${id}`, {
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Request rejected:', data);
      })
      .catch((error) => console.error('Error rejecting request:', error));
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
          {shifteeData.map((student) => (
            <tr key={student._id}>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.previouscourse}</td>
              <td>{student.newcourse}</td>
              <td>{student.reason}</td>
              <td>
                <button onClick={() => handleApproveRequest(student._id, student.email)}>
                  Approve
                </button>
                <button onClick={() => handleRejectRequest(student._id)}>
                  Reject
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