import React from 'react'
import Dashboard from './Dashboard';
import AdminProfile from './AdminProfile';
import RegisteredStudent from './RegisteredStudent';
import ShifeeStudent from './ShifteeStudent';
import { Route, Routes } from 'react-router-dom';

function RoutesAdmin() {
  return (
    <div>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin-profile" element={<AdminProfile />} />
          <Route path="registered-student" element={<RegisteredStudent />} />
          <Route path="shiftee-student" element={<ShifeeStudent />} />
        </Routes>
      
    </div>
  )
}

export default RoutesAdmin
