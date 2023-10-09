import sys1 from './img/sys1.jpg';
import sys2 from './img/sys2.jpg';
import sys3 from './img/sys3.jpg';
import sys4 from './img/sys4.jpg';
import './studentdashboardcss/Courses.css';

const Sysdev = () => {
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
      <img src={sys1} className="img_box1" alt="1" />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="box2">
      <img src={sys2} className="img_box2" alt="2" />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="box3">
      <img src={sys3} className="img_box3" alt="3" />
    </div>
  );
};

const Box4 = () => {
  return (
    <div className="box4">
      <img src={sys4} className="img_box4" alt="4" />
    </div>
  );
};

export default Sysdev;