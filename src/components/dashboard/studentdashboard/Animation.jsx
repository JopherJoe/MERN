import anim1 from './img/anim1.jpg';
import anim2 from './img/anim2.jpg';
import anim3 from './img/anim3.jpg';
import anim4 from './img/anim4.jpg';
import './studentdashboardcss/Courses.css';


const Animation = () => {
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
      <img src={anim1} className="img_box1" alt="1" />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="box2">
      <img src={anim2} className="img_box2" alt="2" />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="box3">
      <img src={anim3} className="img_box3" alt="3" />
    </div>
  );
};

const Box4 = () => {
  return (
    <div className="box4">
      <img src={anim4} className="img_box4" alt="4" />
    </div>
  );
};

export default Animation;