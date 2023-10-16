import { useNavigate } from 'react-router-dom';
import { BsJustify } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'

function Header({OpenSidebar}) {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userLastName");
    window.localStorage.removeItem("userType")
    navigate('/login');
    console.log("Logged out");
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

export default Header;