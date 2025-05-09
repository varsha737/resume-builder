import React, { useState } from 'react';
import Form from './components/Form';
import ResumePreview from './components/ResumePreview';
import ResumePdf from './components/ResumePdf';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handlePreview = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <Form onPreview={handlePreview} />
      {formData && (
        <div>
          <h2>Live Preview</h2>
          <ResumePreview formData={formData} />
          <ResumePdf formData={formData} />
        </div>
      )}
    </div>
  );
};

export default App;
