import bsit1 from './img/bsit1.jpg';
import bsit2 from './img/bsit2.jpg';
import bsit3 from './img/bsit3.jpg';
import bsit4 from './img/bsit4.jpg';
import './studentdashboardcss/Courses.css';

const Bsit = () => {
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
      <img src={bsit1} className="img_box1" alt="1" />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="box2">
      <img src={bsit2} className="img_box2" alt="2" />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="box3">
      <img src={bsit3} className="img_box3" alt="3" />
    </div>
  );
};

const Box4 = () => {
  return (
    <div className="box4">
      <img src={bsit4} className="img_box4" alt="4" />
    </div>
  );
};

export default Bsit;