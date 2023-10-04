import { useState } from 'react'
import Header from '../dashboard/Header';
import Sidebar from '../dashboard/studentdashboard/SidebarStudent'
import StudentRoutes from '../dashboard/studentdashboard/RoutesStudent'

import './pagescss/StudentAdminDashboard.css'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <StudentRoutes />
    </div>

      
  )
}

export default App
