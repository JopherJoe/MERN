import React, { useState, useEffect } from "react";
import { TextField, Card, CardContent } from "@material-ui/core";
import './studentdashboardcss/Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({

    user: {
      firstname: "",
      lastname: "",
      email: "",
      contact_no: ""
    },
    enrollment: {
      course: "", 
      age: '',
      birthdate: '',
      gender: '',
      mothername: '', 
      fathername: '',
      guardian_contact: '',
      address: '',
      elementaryschool: '',
      juniorschool: '',
      seniorschool: ''
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
    const user = JSON.parse(localStorage.getItem("user"))
    const yourToken = user.token;
    const userId = user.userProfile.id; // Replace with the actual user ID
  
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
          const errorMessage = await response.text();
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
            age: data.enrollment ? data.enrollment.age || "" : "",
            birthdate: data.enrollment ? data.enrollment.birthdate || "" : "",
            gender: data.enrollment ? data.enrollment.gender || "" : "",
            mothername: data.enrollment ? data.enrollment.mothername || "" : "",
            fathername: data.enrollment ? data.enrollment.fathername || "" : "",
            guardian_contact: data.enrollment ? data.enrollment.guardian_contact || "" : "",
            address: data.enrollment ? data.enrollment.address || "" : "",
            elementaryschool: data.enrollment ? data.enrollment.elementaryschool || "" : "",
            juniorschool: data.enrollment ? data.enrollment.juniorschool || "" : "",
            seniorschool: data.enrollment ? data.enrollment.seniorschool || "" : "",
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

    
  
  // Fetch profile data when the component mounts
  useEffect(() => {
    console.log("Fetching profile data...");
    fetchProfileData();
  }, []);
  
  return (
    <div className="profile-container">
      <h1>Profile information</h1>
      {profileData.user ? (
        <Card>
        <CardContent>
        <div className="text-field">
          <TextField
            label="Course"
            htmlFor="course"
            name="course"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.course || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
          <TextField
            label="First Name"
            name="firstname"
            id="firstname"
            autoComplete="off"
            value={profileData.user.firstname || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: !!profileData.user.firstname,
            }}
          />
          <TextField
            label="Last Name"
            name="lastname"
            id="lastname"
            autoComplete="off"
            value={profileData.user.lastname || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: !!profileData.user.lastname,
            }}
          />
          <TextField
            label="Contact Number"
            name="contact_no"
            autoComplete="off"
            value={profileData.user.contact_no || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: !!profileData.user.contact_no,
            }}
          /> 
          <TextField
            label="Email Address"
            htmlFor="email"
            name="email"
            id="email"
            autoComplete="email"
            value={profileData.user.email || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: !!profileData.user.email,
            }}
          />
            <TextField
            label="Age"
            name="age"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.age || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
            <TextField
            label="Birthdate"
            name="birthdate"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.birthdate || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
            <TextField
            label="Gender"
            name="gender"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.gender || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
            <TextField
            label="Mother's name"
            name="mothername"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.mothername || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
            <TextField
            label="Father's name"
            name="fathername"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.fathername || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
            <TextField
            label="Guardian's Number"
            name="guardian_contact"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.guardian_contact || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
            <TextField
            label="Address"
            name="address"
            value={profileData.enrollment ? profileData.enrollment.address || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
            autoComplete="street-address"
          />
            <TextField
            label="Primary School"
            name="elementaryschool"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.elementaryschool || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
            <TextField
            label="Junior high school"
            name="juniorschool"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.juniorschool || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
            <TextField
            label="Senior high school"
            name="seniorschool"
            autoComplete="off"
            value={profileData.enrollment ? profileData.enrollment.seniorschool || 'No course data available' : 'No enrollment data available'}
            onChange={handleChange}
          />
        </div>
        </CardContent>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </div>  
  );
};

export default Profile;