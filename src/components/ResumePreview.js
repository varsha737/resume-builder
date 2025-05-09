import React from 'react';
import './ResumePreview.css'; 

const ResumePreview = ({ formData }) => {
  return (
    <div className="resume-preview">
      <h2>{formData.name}</h2>
      <p>{formData.email}</p>
      <p>{formData.phone}</p>
      <p>{formData.experience}</p>
      <p>{formData.skills}</p>
    </div>
  );
};

export default ResumePreview;
