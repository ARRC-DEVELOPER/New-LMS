import React from 'react';
import { useParams } from 'react-router-dom';

const InstructorProfile = ({ instructors }) => {
  const { id } = useParams();

  const instructor = instructors.find(
    instructor => instructor._id === parseInt(id)
  );

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  return (
    <div>
      <h2>{instructor.name}</h2>
      <p>{instructor.profile_headline}</p>
      <p>{instructor.rating} Stars</p>
      <p>Charges: {instructor.charges}</p>
      <p>Skills: {instructor.skills}</p>
      <p>About: {instructor.about}</p>
    </div>
  );
};

export default InstructorProfile;
