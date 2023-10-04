import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import './studentdashboardcss/Profile.css';

const Profile = () => {
  const [student, setStudent] = useState({
    course: "",
    firstname: "",
    lastname: "",
    contact_no: "",
    email: "",
    
  });

  const handleChange = (event) => {
    const { firstname, value } = event.target;
    console.log("handleChange called with name:", firstname, "and value:", value);
    setStudent({ ...student, [firstname]: value });
  };

  // Function to fetch student data from the server
  const fetchStudentData = () => {
    // Replace 'yourToken' with the actual token and 'yourUserId' with the user ID
    const yourToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJKb3BoZXIgSm9lIiwibGFzdG5hbWUiOiJSaWJvIiwiZW1haWwiOiJqb3NpLnJpYm8udXBAcGhpbm1hZWQuY29tIiwiaWQiOiI2NTFkODEwNTExY2YzYThmNzhjZTg0ZTYiLCJjb250YWN0X25vIjo5NDU3NDQ1OTIxLCJpYXQiOjE2OTY0MzI0MzV9.XIepg8TxDkCb3FeZXWpH4RYC9GMszR_tQ1ZzQJv8R54';
    const userId = '651d810511cf3a8f78ce84e6';

    fetch(`http://localhost:4000/todos/findById/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${yourToken}`, // Include the token in the Authorization header
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Response Data:", data);
        // Process the response data as needed

        // Check and set default values for missing or undefined fields
        const updatedStudent = {
          course: data.course || "",
          firstname: data.firstname || "",
          lastname: data.lastname || "",
          contact_no: data.contact_no || "",
          email: data.email || "",
        };

        setStudent(updatedStudent);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  };

  // Fetch student data when the component mounts
  useEffect(() => {
    console.log("Fetching student data...");
    fetchStudentData();
  }, []);

  return (
    <div className="profile-container">
      <h1>Profile information</h1>
      <div className="horizontal">
        <TextField
          label="Course"
          value={student.course}
          onChange={handleChange}
        />
      </div>
      <TextField
        label="First Name"
        value={student.firstname}
        onChange={handleChange}
          InputLabelProps={{
            shrink: !!student.firstname, // Set shrink to true when there's content
               }}
      />
      <TextField
        label="Last Name"
        value={student.lastname}
        onChange={handleChange}
        InputLabelProps={{
          shrink: !!student.firstname, // Set shrink to true when there's content
             }}
      />
      
      <TextField
        label="Contact Number"
        value={student.contact_no}
        onChange={handleChange}
        InputLabelProps={{
          shrink: !!student.firstname, // Set shrink to true when there's content
             }}
      />
      <TextField
        label="Email Address"
        value={student.email}
        onChange={handleChange}
        InputLabelProps={{
          shrink: !!student.firstname, // Set shrink to true when there's content
             }}
      />
      
    </div>
  );
};

export default Profile;
