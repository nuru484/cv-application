import React, { useState } from 'react';
import GeneralInformation from './general-information';
import EducationalExperience from './educational-experience';
import PracticalExperience from './practical-experience';

const Overview = () => {
  const [educationalEx, setEducationalEx] = useState([{ id: 1 }]);
  const [practicalExperiences, setPracticalExperiences] = useState([{ id: 1 }]);

  const handleEducationalEx = () => {
    const nextId =
      educationalEx.length > 0
        ? educationalEx[educationalEx.length - 1].id + 1
        : 1;
    const updatedEducationalEx = [...educationalEx, { id: nextId }];
    setEducationalEx(updatedEducationalEx);
  };

  const deleteEduEx = (id) => {
    const updatedEducationalEx = educationalEx.filter((item) => item.id !== id);
    setEducationalEx(updatedEducationalEx);
  };

  const handleAddPracticalExperience = () => {
    const nextId = practicalExperiences.length + 1;
    const updatedPracticalExperiences = [
      ...practicalExperiences,
      { id: nextId },
    ];
    setPracticalExperiences(updatedPracticalExperiences);
  };

  const deletePracticalExperience = (id) => {
    const updatedPracticalExperiences = practicalExperiences.filter(
      (item) => item.id !== id
    );
    setPracticalExperiences(updatedPracticalExperiences);
  };

  return (
    <div className="app">
      <div>
        <GeneralInformation />
      </div>
      <div>
        <h2>Educational Experience</h2>
        <button onClick={handleEducationalEx}>
          Add Educational Experience
        </button>
        {educationalEx.map((experience) => (
          <EducationalExperience
            key={experience.id}
            handleDelete={() => deleteEduEx(experience.id)}
          />
        ))}
      </div>
      <div>
        <h2>Practical Experience</h2>
        <button onClick={handleAddPracticalExperience}>
          Add Practical Experience
        </button>
        {practicalExperiences.map((experience) => (
          <PracticalExperience
            key={experience.id}
            handleDelete={() => deletePracticalExperience(experience.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
