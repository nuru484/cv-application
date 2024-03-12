import GeneralInformation from './general-information';
import EducationalExperience from './educational-experience';
import PracticalExperience from './practical-experience';
import { useState } from 'react';

const Overview = () => {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const [educationalExperience, setEducationalExperience] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });

  const handleSubmitForGeneralInfo = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedGeneralInformation = {
      ...generalInformation,
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
    };

    setGeneralInformation(updatedGeneralInformation);
  };

  const handleSubmitForEducationalEx = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedEducationalExperience = {
      ...educationalExperience,
      schoolName: formData.get('schoolName'),
      titleOfStudy: formData.get('titleOfStudy'),
      dateOfStudy: formData.get('dateOfStudy'),
    };

    setEducationalExperience(updatedEducationalExperience);
  };

  const handleSubmitForPracticalEx = (e) => {
    e.preventDefault();
    console.log('hello wolrd2');
  };
  return (
    <div>
      <GeneralInformation handleSubmit={handleSubmitForGeneralInfo} />
      <EducationalExperience handleSubmit={handleSubmitForEducationalEx} />
      <PracticalExperience handleSubmit={handleSubmitForPracticalEx} />

      <div className="cv-view">
        <div className="general-information">
          <p className="cvFullName">Name: {generalInformation.fullName}</p>
          <p className="cvEmail">Email: {generalInformation.email}</p>
          <p className="cvPhoneNumber">
            Phone Number: {generalInformation.phoneNumber}
          </p>
        </div>

        <div className="educationalExperience">
          <p className="cvSchoolName">
            School Name:{educationalExperience.schoolName}
          </p>
          <p className="cvTitleOfStudy">
            Title of Study: {educationalExperience.titleOfStudy}
          </p>
          <p className="cvDateOfStudy">
            Date of Study: {educationalExperience.dateOfStudy}
          </p>
        </div>

        <div className="practicalExperience">
          <p className="cvCompanyName">Company Name:</p>
          <p className="cvPositionTitle">Position Title:</p>
          <p className="cvMainResponsibility">Main Responsiblity:</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
