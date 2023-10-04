import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillFilePersonFill, BsFillShiftFill, BsFillTelephoneFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { SiCoursera } from 'react-icons/si';
import { RiMiniProgramFill } from 'react-icons/ri';
import { MdComputer } from 'react-icons/md';
import {BiRegistered} from 'react-icons/bi';

function SidebardStudent({ openSidebarToggle, OpenSidebar }) {
  const [isCiteCoursesOpen, setIsCiteCoursesOpen] = useState(false);

  const toggleCiteCourses = () => {
    setIsCiteCoursesOpen(!isCiteCoursesOpen);
  };

  return (
    <>
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <BsFillFilePersonFill className='icon_header' /> Student
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
            <Link to="/student-dashboard/programs">
              <RiMiniProgramFill className='icon' /> Programs
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <span className='sidebar-dropdown' onClick={toggleCiteCourses}>
              <SiCoursera className='icon' /> Cite Courses
              <span className={`dropdown-arrow ${isCiteCoursesOpen ? 'open' : ''}`}></span>
            </span>
            {isCiteCoursesOpen && (
              <ul className='dropdown-menu'>
                <li className='dropdown-menu-item'>
                  <Link to="/student-dashboard/Bscs">
                    <MdComputer className='icon' /> BSCS
                  </Link>
                </li>
                <li className='dropdown-menu-item'>
                  <Link to="/student-dashboard/bsit">
                    <MdComputer className='icon' /> BSIT
                  </Link>
                </li>
                <li className='dropdown-menu-item'>
                  <Link to="/student-dashboard/web-dev">
                    <MdComputer className='icon' /> WEB DEV
                  </Link>
                </li>
                <li className='dropdown-menu-item'>
                  <Link to="/student-dashboard/sys-dev">
                    <MdComputer className='icon' /> SYS DEV
                  </Link>
                </li>
                <li className='dropdown-menu-item'>
                  <Link to="/student-dashboard/animation">
                    <MdComputer className='icon' /> ANIMATION
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className='sidebar-list-item'>
            <Link to="/student-dashboard/enrollment">
              <BiRegistered className='icon' /> Enrollment
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/student-dashboard/shifting-course">
              <BsFillShiftFill className='icon' /> Shifting Course
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
