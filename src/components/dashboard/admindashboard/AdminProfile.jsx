import React from "react";
import { TextField } from "@material-ui/core";
import './admindashboardcss/AdminProfile.css';

const Profile = () => {
  const [admin, setAdmin] = React.useState({
    name: "",
    birthdate: "",
    birthplace: "",
    nationality: "",
    contactNum: "",
    telNum: "",
    emailAddress: "",
    facebookUsername: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: value });
  };

  return (
    <div className="profile-container">
      <TextField
        label="Name"
        value={admin.name}
        onChange={handleChange}
      />
      <TextField
        label="Birthdate"
        value={admin.birthdate}
        onChange={handleChange}
      />
      <TextField
        label="Birthplace"
        value={admin.birthplace}
        onChange={handleChange}
      />
      <TextField
        label="Nationality"
        value={admin.nationality}
        onChange={handleChange}
      />
      <TextField
        label="Contact Number"
        value={admin.contactNum}
        onChange={handleChange}
      />
      <TextField
        label="Telephone Number"
        value={admin.telNum}
        onChange={handleChange}
      />
      <TextField
        label="Email Address"
        value={admin.emailAddress}
        onChange={handleChange}
      />
      <TextField
        label="Facebook Username"
        value={admin.facebookUsername}
        onChange={handleChange}
      />
    </div>
  
  );
};

export default Profile;
