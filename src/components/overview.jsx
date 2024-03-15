import GeneralInformation from './general-information';
import EducationalExperience from './educational-experience';
import PracticalExperience from './practical-experience';
import { useState } from 'react';

const Overview = () => {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [showGeneralInfo, setShowGeneralInfo] = useState(false);

  const handleSubmitForGeneralInfo = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedGeneralInf = {
      ...generalInfo,
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    setGeneralInfo(updatedGeneralInf);
  };

  const handleShowGeneralInfo = () => {
    setShowGeneralInfo(true);
  };

  const [educationalEx, setEducationalEx] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudyFrom: '',
    dateOfStudyTo: '',
  });

  const [showEducationalEx, setShowEducationalEx] = useState(false);

  const handleSubmitForEducationalEx = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedEducationalEx = {
      ...educationalEx,
      schoolName: formData.get('schoolName'),
      titleOfStudy: formData.get('titleOfStudy'),
      dateOfStudyFrom: formData.get('dateOfStudyFrom'),
      dateOfStudyTo: formData.get('dateOfStudyTo'),
    };

    setEducationalEx(updatedEducationalEx);
  };

  const handleShowEducationalEx = () => {
    setShowEducationalEx(true);
  };

  const [practicalEx, setPracticalEx] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibility: '',
    experienceFrom: '',
    experienceTo: '',
  });

  const [showPracticalEx, setShowPracticalEx] = useState(false);

  const handleSubmitForPracticalEx = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedPracticalEx = {
      ...practicalEx,
      companyName: formData.get('companyName'),
      positionTitle: formData.get('positionTitle'),
      mainResponsibility: formData.get('mainResponsibility'),
      experienceFrom: formData.get('experienceFrom'),
      experienceTo: formData.get('experienceTo'),
    };

    setPracticalEx(updatedPracticalEx);
  };

  const handleShowPracticalEx = () => {
    setShowPracticalEx(true);
  };

  return (
    <div className="appClass">
      <div className="forms">
        {showGeneralInfo ? (
          <GeneralInformation
            handleSubmit={handleSubmitForGeneralInfo}
            hideGeneralInfo={() => {
              setShowGeneralInfo(false);
            }}
          />
        ) : (
          <div onClick={handleShowGeneralInfo}>General Information </div>
        )}

        {showEducationalEx ? (
          <EducationalExperience
            handleSubmit={handleSubmitForEducationalEx}
            hideEducationalEx={() => {
              setShowEducationalEx(false);
            }}
          />
        ) : (
          <div onClick={handleShowEducationalEx}>Educational Experience </div>
        )}

        {showPracticalEx ? (
          <PracticalExperience
            handleSubmit={handleSubmitForPracticalEx}
            hidePracticalEx={() => {
              setShowPracticalEx(false);
            }}
          />
        ) : (
          <div onClick={handleShowPracticalEx}>Practical Experience</div>
        )}
      </div>

      <div className="cvDisplay">
        <section className="generalInfo">
          <p>{generalInfo.fullName} </p>
          <p> {generalInfo.email}</p>
          <p>{generalInfo.phone}</p>
        </section>

        <section className="educationalEx">
          <p>{educationalEx.schoolName}</p>
          <p>{educationalEx.titleOfStudy}</p>
          <p>{educationalEx.dateOfStudyFrom}</p>
          <p>{educationalEx.dateOfStudyTo}</p>
        </section>

        <section className="practicalEx">
          <p>{practicalEx.companyName}</p>
          <p>{practicalEx.positionTitle}</p>
          <p>{practicalEx.mainResponsibility}</p>
          <p>{practicalEx.experienceFrom}</p>
          <p>{practicalEx.experienceTo}</p>
        </section>
      </div>
    </div>
  );
};

export default Overview;
