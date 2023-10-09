import React from 'react'
import Home from './Home';
import Profile from './Profile';
import Programs from './Programs';
import Bscs from './Bscs';
import Bsit from './Bsit';
import Webdev from './Webdev';
import Sysdev from './Sysdev';
import Animation from './Animation';
import Enrollment from './Enrollment';
import ShiftingCourse from './ShiftingCourse';
import ContactUs from './ContactUs'
import StudentPrivateRoute from './StudentPrivateRoute';
import { Route, Routes } from 'react-router-dom';

function RoutesStudent() {
  return (
    <div>        
        <Routes>
    <Route path="home" element={<StudentPrivateRoute><Home /></StudentPrivateRoute>} />
    <Route path="profile" element={<StudentPrivateRoute><Profile /></StudentPrivateRoute>} />
    <Route path="programs" element={<StudentPrivateRoute><Programs /></StudentPrivateRoute>} />
    <Route path="bscs" element={<StudentPrivateRoute><Bscs /></StudentPrivateRoute>} />
    <Route path="bsit" element={<StudentPrivateRoute><Bsit /></StudentPrivateRoute>} />
    <Route path="web-dev" element={<StudentPrivateRoute><Webdev /></StudentPrivateRoute>} />
    <Route path="sys-dev" element={<StudentPrivateRoute><Sysdev /></StudentPrivateRoute>} />
    <Route path="animation" element={<StudentPrivateRoute><Animation /></StudentPrivateRoute>} />
    <Route path="enrollment" element={<StudentPrivateRoute><Enrollment /></StudentPrivateRoute>} />
    <Route path="shifting-course" element={<StudentPrivateRoute><ShiftingCourse /></StudentPrivateRoute>} />
    <Route path="contact-us" element={<StudentPrivateRoute><ContactUs /></StudentPrivateRoute>} />
    </Routes>
      
    </div>
  )
}

export default RoutesStudent