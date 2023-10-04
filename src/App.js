import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import StudentLogin from './components/pages/StudentLogin';
import AdminLogin from './components/pages/AdminLogin';
import StudentCreateAccount from './components/pages/StudentCreateAccount';
import StudentDashboard from './components/pages/StudentDashboard';
import AdminDashboard from './components/pages/AdminDashboard';
import ForgotPassword from './components/pages/forgotpassword/ForgotPassword';
import ResetPassword from './components/pages/forgotpassword/ResetPassword';
import SuccessMessage from './components/pages/forgotpassword/SuccessMessage';




function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="student-login" element={<StudentLogin />} />
        <Route path="student-create-account" element={<StudentCreateAccount />} />
        <Route path="student-dashboard/*" element={<StudentDashboard />} />
        <Route path="admin-dashboard/*" element={<AdminDashboard />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<SuccessMessage />} />
      </Routes>
  );
}

export default App;
