import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ImageClick from './components/pages/ImageClick';
import HomePage from './components/pages/HomePage';
import StudentLogin from './components/pages/StudentLogin';
import AdminLogin from './components/pages/AdminLogin';
import StudentCreateAccount from './components/pages/StudentCreateAccount';
import StudentDashboard from './components/pages/StudentDashboard';
import AdminDashboard from './components/pages/AdminDashboard';
import Header from './components/dashboard/Header';


function App() {
  const userType = window.localStorage.getItem("userType");
  console.log("User type:", userType);
  return (
      <Routes>
        <Route path="/" element={<ImageClick />} />
        <Route path="login" element={<HomePage />} />
      <Route
        path="admin-login"
        element={
          userType === "admin" ? <Header /> : <AdminLogin />}/>
      <Route
        path="student-login"
        element={
          userType === "student" ? <Header /> : <StudentLogin />}/>
        <Route path="student-create-account" element={<StudentCreateAccount />} />
        <Route path="student-dashboard/*" element={<StudentDashboard />} />
        <Route path="admin-dashboard/*" element={<AdminDashboard />} />
      </Routes>
  );
}

export default App;