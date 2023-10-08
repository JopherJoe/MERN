
import './admindashboardcss/Table.css';
import React, {useState, useEffect } from 'react';



function ShifteeStudent() {
  const [shifteeData, setShifteeData] = useState([]);
  const [emailStatus, setEmailStatus] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:4000/change/get-request')
      .then((response) => response.json())
      .then((data) => {
        setShifteeData(data);
      })
      .catch((error) => console.error('Error fetching shiftee student data:', error));
  }, []);

  const handleApprove = (id, userEmail) => {
    fetch(`http://localhost:4000/change/request-approve/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Your request has been approved') {
          console.log('Request approved successfully');
          setShifteeData((prevData) =>
            prevData.filter((student) => student._id !== id)
          );
          setEmailStatus('Email sent successfully');
        } else {
          console.error('Approval failed:', data.message);

          setEmailStatus('Email sending failed');
        }
      })
      .catch((error) =>
        console.error('Error during approval:', error)
      );
  };
  const handleReject = (id, userEmail) =>{
    fetch(`http://localhost:4000/change/request-reject/${id}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:userEmail}),
    })
    .then((response)=> response.json())
    .then((data)=> {
      if (data.message === 'Your request has been rejected'){
        console.log('Request Reject');
        setShifteeData((prevData)=>
        prevData.filter((student) => student._id !==id)
        );
        setEmailStatus('Email sent Successfully');
      }else{
        console.error('Rejected failed: ', data.message);

        setEmailStatus('Email sending failed')
      }
    })
    .catch((error)=>
    console.error('Error during Rejecting: ', error)
    );
  };
  
  
  return (
    <div className="centered">
      <p>Total Shiftee Students: {shifteeData.length}</p>
      {emailStatus && <div className={emailStatus === 'Email sent successfully' ? 'success' : 'error'}>{emailStatus}</div>}
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
                <button onClick={() => handleApprove(student._id, student.email)}>
                  Approve
                </button>
                <button onClick = {() => handleReject(student._id, student.email)}>
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