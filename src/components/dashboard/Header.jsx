import { BsJustify } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'

function Header({OpenSidebar}) {
  const handleLogout = () => {
    localStorage.clear();
  
    window.location.href = "/";

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
