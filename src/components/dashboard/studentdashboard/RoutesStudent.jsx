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
import { Route, Routes } from 'react-router-dom';

function RoutesStudent() {
  return (
    <div>        
        <Routes>
    <Route path="home" element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route path="programs" element={<Programs />} />
    <Route path="bscs" element={<Bscs />} />
    <Route path="bsit" element={<Bsit />} />
    <Route path="web-dev" element={<Webdev />} />
    <Route path="sys-dev" element={<Sysdev />} />
    <Route path="animation" element={<Animation />} />
    <Route path="enrollment" element={<Enrollment />} />
    <Route path="shifting-course" element={<ShiftingCourse />} />
    <Route path="contact-us" element={<ContactUs />} />
    </Routes>
      
    </div>
  )
}

export default RoutesStudent
