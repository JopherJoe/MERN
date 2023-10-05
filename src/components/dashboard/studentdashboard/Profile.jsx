import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import './studentdashboardcss/Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    user: {
      firstname: "",
      lastname: "",
      email: "",
      contact_no: "",
    },
    enrollment: {
      course: "",
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("handleChange called with name:", name, "and value:", value);
    setProfileData({
      ...profileData,
      user: { ...profileData.user, [name]: value },
    });
  };

  // Function to fetch student data from the server
  const fetchProfileData = () => {
    // Replace 'yourToken' with the actual token and 'yourUserId' with the user ID
    const yourToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJKb3BoZXIgSm9lIiwibGFzdG5hbWUiOiJSaWJvIiwiZW1haWwiOiJqb3NpLnJpYm8udXBAcGhpbm1hZWQuY29tIiwiaWQiOiI2NTFlYjMzNWQ5MWQ0MDFhMDkzOWNjZDQiLCJjb250YWN0X25vIjo5NDU3NDQ1OTIxLCJpYXQiOjE2OTY1MTA3OTZ9.0Kw1v5hX0CWnfYYq5pPVI7I4VlSmplyvVGW7ijNqs9I'; // Replace with your access token
    const userId = '651eb335d91d401a0939ccd4'; // Replace with your user ID

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

        // Set the combined user and enrollment data
        setProfileData(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  };

  // Fetch profile data when the component mounts
  useEffect(() => {
    console.log("Fetching profile data...");
    fetchProfileData();
  }, []);

  return (
    <div className="profile-container">
      <h1>Profile information</h1>
      <div className="horizontal">
        <TextField
          label="Course"
          name="course"
          value={profileData.enrollment.course}
          onChange={handleChange}
        />
      </div>
      <TextField
        label="First Name"
        name="firstname"
        value={profileData.user.firstname}
        onChange={handleChange}
        InputLabelProps={{
          shrink: !!profileData.user.firstname,
        }}
      />
      <TextField
        label="Last Name"
        name="lastname"
        value={profileData.user.lastname}
        onChange={handleChange}
        InputLabelProps={{
          shrink: !!profileData.user.lastname,
        }}
      />
      <TextField
        label="Contact Number"
        name="contact_no"
        value={profileData.user.contact_no}
        onChange={handleChange}
        InputLabelProps={{
          shrink: !!profileData.user.contact_no,
        }}
      />
      <TextField
        label="Email Address"
        name="email"
        value={profileData.user.email}
        onChange={handleChange}
        InputLabelProps={{
          shrink: !!profileData.user.email,
        }}
      />
    </div>
  );
};

export default Profile;
