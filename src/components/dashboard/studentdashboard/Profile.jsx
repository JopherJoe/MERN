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
      course: "", // Initialize with an empty string
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
    const yourToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJKb3BoZXIgSm9lIiwibGFzdG5hbWUiOiJSaWJvIiwiZW1haWwiOiJqb3NpLnJpYm8udXBAcGhpbm1hZWQuY29tIiwiaWQiOiI2NTIzNzI0ZDJhZjIzMjFmMTVhNjIxYmMiLCJjb250YWN0X25vIjo5NDU3NDQ1OTIxLCJpYXQiOjE2OTY4MjE4NTV9._O3YxEsSVzKCdovQ8ronsy2gIRBV71SF2Y4T7rPXvBI';
    const userId = '6523724d2af2321f15a621bc'; // Replace with the actual user ID
  
    fetch(`http://localhost:4000/todos/findById/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${yourToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        console.log("Response Status:", response.status);
        if (!response.ok) {
          const errorMessage = await response.text(); // Get the error message from the response body
          throw new Error(`HTTP Error! Status: ${response.status}, Message: ${errorMessage}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response Data:", data);
  
        const profile = {
          user: {
            firstname: data.user ? data.user.firstname || "" : "",
            lastname: data.user ? data.user.lastname || "" : "",
            email: data.user ? data.user.email || "" : "",
            contact_no: data.user ? data.user.contact_no || "" : "",
          },
          enrollment: {
            course: data.enrollment ? data.enrollment.course || "Not enrolled" : "Not enrolled",
            // Add any other enrollment fields you need
          },
        };
        setProfileData(profile);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        // Handle the error, for example, by showing an error message to the user.
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
      {profileData.user ? (
        <div className="text-field">
          <TextField
            label="Course"
            name="course"
            value={profileData.enrollment ? profileData.enrollment.course || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
          <TextField
            label="First Name"
            name="firstname"
            value={profileData.user.firstname || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: !!profileData.user.firstname,
            }}
          />
          <TextField
            label="Last Name"
            name="lastname"
            value={profileData.user.lastname || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: !!profileData.user.lastname,
            }}
          />
          <TextField
            label="Contact Number"
            name="contact_no"
            value={profileData.user.contact_no || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: !!profileData.user.contact_no,
            }}
          />
          <TextField
            label="Email Address"
            name="email"
            value={profileData.user.email || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: !!profileData.user.email,
            }}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Profile;
