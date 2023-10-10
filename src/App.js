import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumeDisplay from "./components/ResumeDisplay";
import "./styles.css";

function App() {
  const [resumeData, setResumeData] = useState(null);

  const handleSave = (data) => {
    setResumeData(data);
  };

  return (
    <div className="container">
      <h1>Online Resume Builder</h1>
      <div className="row">
        <div className="column">
          <ResumeForm onSave={handleSave} />
        </div>
        <div className="column">
          {resumeData && <ResumeDisplay data={resumeData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
