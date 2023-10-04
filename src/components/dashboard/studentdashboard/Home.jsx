import React from 'react';
import './studentdashboardcss/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
      <h2 className="center">Welcome to PHINMA Education</h2>
      <h2>Since 2004, PHINMA Education has provided quality education to underserved youth who are often the first in their families to go to college.</h2>

      <div className="stats">
        <div className="stat">
          <h3>124K+ Students</h3>
          <p>In the Philippines and Indonesia</p>
        </div>
        <div className="stat">
          <h3>110+ Programs</h3>
          <p>Offered across the network</p>
        </div>
        <div className="stat">
          <h3>75% Passing Rate</h3>
          <p>For first-time board exam takers</p>
        </div>
        <div className="stat">
          <h3>122 Topnotchers</h3>
          <p>Board exam topnotchers in the Philippines</p>
        </div>
        <div className="stat">
          <h3>71% Graduates Employed</h3>
          <p>Within a year after graduation</p>
        </div>
        <div className="stat">
          <h3>27K+ Licensed Professionals</h3>
          <p>In the Philippines</p>
        </div>
      </div>

      <h2 className="center">We started with just a single school serving</h2>
      <h2 className="center">5,000 students in Cabanatuan City. Today, we are a fast-growing</h2>
      <h2 className="center">network of ten educational institutions serving</h2>
      <h2 className="center">over 124,000 students in the Philippines and Indonesia</h2>
    </div>
    </div>
  );
}

export default Home;

