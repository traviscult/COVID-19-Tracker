import React from 'react';
import './assessments.css';
import Questionnaire from './Questionnaire';

const Assessment = () => {
  return (
    <div className="assessmentCol px-3 py-3">
      <h5> Assess Your COVID-19 Risk</h5>
      <h6>Answer a few questions to find out about the symptoms and risk factors of the COVID-19. </h6>
      <hr />
      <Questionnaire />


    </div>
  )
}
export default Assessment;