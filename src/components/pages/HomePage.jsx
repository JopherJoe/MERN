import React from 'react';
import { Link } from 'react-router-dom';
import './pagescss/HomePage.css';

function HomePage() {
  return (
    <div className="button-container">
      <Link to="/student-login" className="oblong-button"> STUDENT</Link>
      <Link to="/admin-login" className="oblong-button">ADMINISTRATION</Link>
      </div>
  );
}

export default HomePage;
