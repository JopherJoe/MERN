import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillFilePersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import {BiRegistered} from 'react-icons/bi';

function SidebardStudent({ openSidebarToggle, OpenSidebar }) {
  const userFirstName = localStorage.getItem("userFirstName");
  const userLastName = localStorage.getItem("userLastName"); 
  

  return (
    <>
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <BsFillFilePersonFill className='icon_header' /> 
            {userFirstName && userLastName
              ? `${userFirstName} ${userLastName}`
              : "Student"
            }
          </div>
          <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <Link to="/student-dashboard/home">
              <AiFillHome className='icon' /> Home
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/student-dashboard/profile">
              <CgProfile className='icon' /> Profile
            </Link>
          </li> 
          <li className='sidebar-list-item'>
            <Link to="/student-dashboard/enrollment">
              <BiRegistered className='icon' /> Enrollment
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/student-dashboard/syllabus">
              <BsFillTelephoneFill className='icon' /> Syllabus
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/student-dashboard/contact-us">
              <BsFillTelephoneFill className='icon' /> Contact Us
            </Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default SidebardStudent;


