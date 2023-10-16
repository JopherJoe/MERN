import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

const ImageClick = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img src={logo} alt="" onClick={handleClick} />
      <div
        style={{
          margin: '10px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        Click the image to login
      </div>
    </div>
  );
};

export default ImageClick;
