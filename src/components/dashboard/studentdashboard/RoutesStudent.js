import React from 'react'
import Home from './Home';
import Profile from './Profile';
import Enrollment from './Enrollment';
import Syllabus from './syllabus/Syllabus';
import ContactUs from './ContactUs'
import StudentPrivateRoute from './StudentPrivateRoute';
import { Route, Routes } from 'react-router-dom'; 

function RoutesStudent() {
  return (
    <>        
    <Routes>
    <Route path="home" element={<StudentPrivateRoute><Home /></StudentPrivateRoute>} />
    <Route path="profile" element={<StudentPrivateRoute><Profile /></StudentPrivateRoute>} />
    <Route path="enrollment" element={<StudentPrivateRoute><Enrollment /></StudentPrivateRoute>} />
    <Route path="syllabus" element={<StudentPrivateRoute><Syllabus /></StudentPrivateRoute>} />
    <Route path="contact-us" element={<StudentPrivateRoute><ContactUs /></StudentPrivateRoute>} />
    </Routes>
      
    </> 
  )
}

export default RoutesStudent