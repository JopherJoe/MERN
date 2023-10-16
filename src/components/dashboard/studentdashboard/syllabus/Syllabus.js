import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import syllabusData from './data';
import ProfessorProfileModal from './ProfessorProfile';
import './Syllabus.css';

const Syllabus = () => {
  const professorMap = {
    'IT101': 'Mr. Smith',
    'IT102': 'Mr. Jones',
    'IT201': 'Mr. Brown',
    'IT202': 'Mr. Johnson',
    'IT301': 'Mr. Williams',
    'IT302': 'Mr. Cooper',
    'IT401': 'Mr. Miller',
    'IT402': 'Mr. Davis',
    'IT403': 'Mr. Garcia',
    'IT404': 'Mr. Martinez',
  };

  const syllabusDataWithProfessor = syllabusData.map((course) => {
    const professorName = professorMap[course.courseCode];
    const professor = professorName
      ? {
          name: professorName,
          title: `Professor of ${course.courseTitle}`,
          bio: course.professor ? course.professor.bio : 'No bio available',
        }
      : null;

    return {
      ...course,
      professor,
    };
  });

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const openProfileModal = (professor) => {
    setSelectedProfessor(professor);
    setShowProfileModal(true);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  return (
    <div className="syllabus-container">
      <h2>Sample Syllabus</h2>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Professor</th>
              <th>Credits</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {syllabusDataWithProfessor.map((course) => (
              <tr key={course.id}>
                <td data-course-code={course.courseCode}>{course.courseCode}</td>
                <td data-course-title={course.courseTitle}>{course.courseTitle}</td>
                <td>
                  {course.professor ? (
                    <span
                      className="professor-name"
                      onClick={() => openProfileModal(course.professor)}
                    >
                      {course.professor.name}
                    </span>
                  ) : (
                    'No professor assigned'
                  )}
                </td>
                <td data-credits={course.credits}>{course.credits}</td>
                <td data-description={course.description}>{course.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {showProfileModal && (
        <ProfessorProfileModal professor={selectedProfessor} onHide={closeProfileModal} />
      )}
    </div>
  );
};

export default Syllabus;
