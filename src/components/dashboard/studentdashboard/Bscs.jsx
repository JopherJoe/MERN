import bscs1 from './img/bscs1.jpg';
import bscs2 from './img/bscs2.jpg';
import bscs3 from './img/bscs3.jpg';
import bscs4 from './img/bscs4.jpg';
import './studentdashboardcss/Courses.css';


const Bscs = () => {
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
      <img src={bscs1} className="img_box1" alt="1" />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="box2">
      <img src={bscs2} className="img_box2" alt="2" />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="box3">
      <img src={bscs3} className="img_box3" alt="3" />
    </div>
  );
};

const Box4 = () => {
  return (
    <div className="box4">
      <img src={bscs4} className="img_box4" alt="4" />
    </div>
  );
};

export default Bscs;