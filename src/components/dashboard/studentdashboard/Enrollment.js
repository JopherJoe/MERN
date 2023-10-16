import React, { useState } from 'react';
import { Card, CardContent } from "@material-ui/core";
import './studentdashboardcss/Enrollment.css';

function Enrollment() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact_no, setNumber] = useState('');
  const [course, setSelectedCourse] = useState('');
  const [age, setAge] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [mothername, setMotherName] = useState('');
  const [fathername, setFatherName] = useState('');
  const [guardian_contact, setGuardianContact] = useState('');
  const [address, setAddress] = useState('');
  const [elementaryschool, setElementarySchool] = useState(''); // Fixed the state variable name
  const [juniorschool, setJuniorschool] = useState(''); // Fixed the state variable name
  const [seniorschool, setSeniorschool] = useState(''); // Fixed the state variable name

  const courseOptions = ['Animation', 'Web Dev', 'Sys Dev', 'Bscs'];
  const genderOptions = ['Male', 'Female'];

  const handleEnrollment = () => {
    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      contact_no === '' ||
      course === '' ||
      age === '' ||
      birthdate === '' ||
      gender === '' ||
      mothername === '' ||
      fathername === '' ||
      guardian_contact === '' ||
      address === '' ||
      elementaryschool === '' ||
      juniorschool === '' ||
      seniorschool === ''
    ) {
      alert('All fields are required');
    } else {
      const enrollmentData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        contact_no: contact_no,
        course: course,
        age: age,
        birthdate: birthdate,
        gender: gender,
        mothername: mothername,
        fathername: fathername,
        guardian_contact: guardian_contact,
        elementaryschool: elementaryschool,
        seniorschool: seniorschool,
        juniorschool: juniorschool,
        address: address
      };
      const user = JSON.parse(localStorage.getItem('user'));
      const yourToken = user.token;
      

      fetch('http://localhost:4000/enroll/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${yourToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrollmentData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Enrollment request successful:', data);
          if (data.error) {
            alert('Enrollment failed: ' + data.error);
          } else {
            alert('Enrollment successful');
          }
        })
        .catch((error) => {
          console.error('Error sending enrollment request:', error);
          alert('An error occurred while enrolling. Please try again.');
        });
    }
  };

  return (
    <div className="htmlform-container">
      <h1>Enrollment</h1>
      <Card>
        <CardContent>
          <div className="column">
            <div className="column">
              <label htmlFor="firstname">First Name*</label>
              <input
                type="text"
                id="firstname"
                name="input1"
                autoComplete="given-name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="lastname">Last Name*</label>
              <input
                type="text"
                id="lastname"
                name="input2"
                autoComplete="family-name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="email">Email Address*</label>
              <input
                type="text"
                id="email"
                name="input3"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="contact_no">Phone Number*</label>
              <input
                type="text"
                id="contact_no"
                name="input4"
                value={contact_no}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="course">Track*</label>
              <select
                id="course"
                name="input5"
                value={course}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">Select Track</option>
                {courseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="column">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                id="age"
                name="input6"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="birthdate">Birthdate*</label>
              <input
                type="date"
                id="birthdate"
                name="input7"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <label htmlFor="gender">Gender*</label>
              <select
                id="gender"
                name="input8"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                {genderOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="column">
              <label htmlFor="mothername">Mother's Name*</label>
              <input
                type="text"
                id="mothername"
                name="input9"
                value={mothername}
                onChange={(e) => setMotherName(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="fathername">Father's Name*</label>
              <input
                type="text"
                id="fathername"
                name="input10"
                value={fathername}
                onChange={(e) => setFatherName(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="guardiancontact">Guardian's Contact*</label>
              <input
                type="text"
                id="guardiancontact"
                name="input11"
                value={guardian_contact}
                onChange={(e) => setGuardianContact(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="address">Address*</label>
              <input
                type="text"
                id="address"
                name="input12"
                value={address}
                autoComplete="country"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="elementaryschool">Elementary School*</label>
              <input
                type="text"
                id="elementaryschool"
                name="input13"
                value={elementaryschool}
                onChange={(e) => setElementarySchool(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="juniorschool">Junior High School*</label>
              <input
                type="text"
                id="juniorschool"
                name="input14"
                value={juniorschool}
                onChange={(e) => setJuniorschool(e.target.value)}
              />
            </div>
            <div className="column">
              <label htmlFor="seniorschool">Senior High School*</label>
              <input
                type="text"
                id="seniorschool"
                name="input15"
                value={seniorschool}
                onChange={(e) => setSeniorschool(e.target.value)}
              />
            </div>
          </div>
          <div className="button-group">
            <button onClick={handleEnrollment} className="submit-button">
              SUBMIT
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Enrollment;
