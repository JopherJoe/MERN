import { useNavigate } from 'react-router-dom';
import { BsJustify } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'

function Header({OpenSidebar}) {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logged out");
    window.localStorage.removeItem("userType")
    navigate('/');
 };
  
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'>
              <AiOutlineLogout className='icon' onClick={handleLogout}/>
        </div>
    </header>
  )
}

export default Header
