// src/components/ResumeDisplay.js
import React from "react";
import "./ResumeDisplay.css";

function ResumeDisplay({ data }) {
  const handlePrint = () => {
    window.print(); // Trigger the browser's print dialog
  };

  return (
    <div className="resume-display">
      <h2>Your Resume</h2>
      <div className="resume-section">
        <h3>Name:</h3>
        <p>{data.name}</p>
      </div>
      <div className="resume-section">
        <h3>Title:</h3>
        <p>{data.title}</p>
      </div>
      <div className="resume-section">
        <h3>Email:</h3>
        <p>{data.email}</p>
      </div>
      <div className="resume-section">
        <h3>Phone:</h3>
        <p>{data.phone}</p>
      </div>
      <div className="resume-section">
        <h3>Website:</h3>
        <p>{data.website}</p>
      </div>
      <div className="resume-section">
        <h3>Location:</h3>
        <p>{data.location}</p>
      </div>
      <div className="resume-section">
        <h3>Education:</h3>
        <p>{data.education}</p>
      </div>
      <div className="resume-section">
        <h3>Experience:</h3>
        <p>{data.experience}</p>
      </div>
      <div className="resume-section">
        <h3>Skills:</h3>
        <p>{data.skills}</p>
      </div>
      <button className="print-button" onClick={handlePrint}>
        Print Resume
      </button>
    </div>
  );
}

export default ResumeDisplay;
