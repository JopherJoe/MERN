import React from 'react'
import Dashboard from './Dashboard';
import Enrollees from './Enrollees';
import RegisteredStudent from './RegisteredStudent';
import ShifeeStudent from './ShifteeStudent';
import AdminPrivateRoute from './AdminPrivateRoute';
import { Route, Routes } from 'react-router-dom';

function RoutesAdmin() {
  return (
    <div>
        <Routes>
          <Route path="dashboard" element={<AdminPrivateRoute><Dashboard /></AdminPrivateRoute>} />
          <Route path="enrollees" element={<AdminPrivateRoute><Enrollees /></AdminPrivateRoute>} />
          <Route path="registered-student" element={<AdminPrivateRoute><RegisteredStudent /></AdminPrivateRoute>} />
          <Route path="shiftee-student" element={<AdminPrivateRoute><ShifeeStudent /></AdminPrivateRoute>} />
        </Routes>
      
    </div>
  )
}

export default RoutesAdmin
