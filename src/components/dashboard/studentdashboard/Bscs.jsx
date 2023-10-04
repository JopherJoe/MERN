import React, { useState } from 'react';
import bscs1 from './img/bscs1.jpg';
import bscs2 from './img/bscs2.jpg';
import bscs3 from './img/bscs3.jpg';
import './studentdashboardcss/Courses.css';

const Bscs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    {
      id: 1,
      src: bscs1,
      caption: 'Image 1',
    },
    {
      id: 2,
      src: bscs2,
      caption: 'Image 2',
    },
    {
      id: 3,
      src: bscs3,
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
      A Bachelor of Science in Computer Science (BSCS) is a four-year undergraduate program that equips students with the knowledge and skills to design, develop, and maintain software and computer systems. Salary rates for BSCS professionals vary, with entry-level salaries ranging from $60,000 to $80,000 in the US, and can be influenced by industry demand and market conditions.
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

export default Bscs;
