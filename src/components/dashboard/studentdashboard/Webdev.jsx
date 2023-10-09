import web1 from './img/web1.jpg';
import web2 from './img/web2.jpg';
import web3 from './img/web3.jpg';
import web4 from './img/web4.jpg';
import './studentdashboardcss/Courses.css';

const Webdev = () => {
  return (
    <div className="box_container">
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </div>
  );
};


const Box1 = () => {
  return (
    <div className="box1">
      <img src={web1} className="img_box1" alt="1" />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="box2">
      <img src={web2} className="img_box2" alt="2" />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="box3">
      <img src={web3} className="img_box3" alt="3" />
    </div>
  );
};

const Box4 = () => {
  return (
    <div className="box4">
      <img src={web4} className="img_box4" alt="4" />
    </div>
  );
};

export default Webdev;