import React from 'react'
import Dashboard from './Dashboard';
import Enrollees from './Enrollees';
import RegisteredStudent from './RegisteredStudent';
import ShifeeStudent from './ShifteeStudent';
import { Route, Routes } from 'react-router-dom';

function RoutesAdmin() {
  return (
    <div>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="enrollees" element={<Enrollees />} />
          <Route path="registered-student" element={<RegisteredStudent />} />
          <Route path="shiftee-student" element={<ShifeeStudent />} />
        </Routes>
      
    </div>
  )
}

export default RoutesAdmin
