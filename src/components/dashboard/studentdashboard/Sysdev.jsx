import React, { useState } from 'react';
import sys1 from './img/sys1.jpg';
import sys2 from './img/sys2.jpg';
import sys3 from './img/sys3.jpg';
import './studentdashboardcss/Courses.css';

const Sysdev = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    {
      id: 1,
      src: sys1,
      caption: 'Image 1',
    },
    {
      id: 2,
      src: sys2,
      caption: 'Image 2',
    },
    {
      id: 3,
      src: sys3,
      caption: 'Image 3',
    },
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setModalOpen(false);
  };

  const goToNextImage = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="animation-container">
    <div className="centered-text">
      <p>
      A Bachelor of Science in Information Technology with a specialization in Systems Development (BSIT Sys Dev) is a degree program focusing on software system design, development, and maintenance. Graduates can create secure software solutions for various industries. Salary rates vary based on location, experience, and role, with skilled professionals earning over $100,000 per year.
      </p>
    </div>
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={image.id} className="gallery-item">
          <img
            src={image.src}
            alt={image.caption}
            onClick={() => openModal(index)}
          />
        </div>
      ))}
    </div>
    {modalOpen && selectedIndex !== null && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img src={images[selectedIndex].src} alt={images[selectedIndex].caption} />
          <p>{images[selectedIndex].caption}</p>
          <button onClick={goToPreviousImage}>Previous</button>
          <button onClick={goToNextImage}>Next</button>
        </div>
      </div>
    )}
  </div>
);
};

export default Sysdev;
