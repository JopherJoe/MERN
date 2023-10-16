import React from 'react';
import './ProfessorProfile.css';

const ProfessorProfileModal = ({ professor, onHide }) => {
  return (
    <div className="professor-profile-modal">
      <h2>{professor.name}</h2>
      <img src={professor.photo} alt="" />
      <p>{professor.title}</p>
      <p>{professor.bio}</p>
      <button onClick={onHide}>Close</button>
    </div>
  );
};

export default ProfessorProfileModal;
