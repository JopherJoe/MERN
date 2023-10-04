import { useState } from 'react'
import Header from '../dashboard/Header';
import Sidebar from '../dashboard/admindashboard/SidebarAdmin'
import RoutesAdmin from '../dashboard/admindashboard/RoutesAdmin'
import './pagescss/StudentAdminDashboard.css'

function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <RoutesAdmin />
    </div>
  )
}


export default AdminDashboard
