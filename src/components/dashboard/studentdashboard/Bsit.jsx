import React, { useState } from 'react';
import './studentdashboardcss/Courses.css';
import bsit1 from './img/bsit1.jpg';
import bsit2 from './img/bsit2.jpg';
import bsit3 from './img/bsit3.jpg';

const Bsit = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedImageIndex] = useState(null);

  const images = [
    {
      id: 1,
      src: bsit1,
      caption: 'Image 1',
    },
    {
      id: 2,
      src: bsit2,
      caption: 'Image 2',
    },
    {
      id: 3,
      src: bsit3,
      caption: 'Image 3',
    },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalOpen(false);
  };

  const goToNextImage = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedImageIndex(selectedIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedImageIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="animation-container">
    <div className="centered-text">
      <p>
      BSIT is an undergraduate program focusing on computer systems, software development, and technology. It prepares students for IT careers in programming, network administration, cybersecurity, and database management. Salary ranges from $50,000 to $70,000 per year in the US, with potential for six-figure salaries in specialized areas.
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

export default Bsit;
