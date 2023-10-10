// src/components/ResumeForm.js
import React, { useState } from "react";
import "./styles.css";

function ResumeForm({ onSave }) {
  const [resumeData, setResumeData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(resumeData);
  };

  return (
    <div className="resume-form">
      <h2>Input Your Resume Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={resumeData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={resumeData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={resumeData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={resumeData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Website:</label>
          <input
            type="url"
            name="website"
            value={resumeData.website}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={resumeData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Education:</label>
          <textarea
            name="education"
            value={resumeData.education}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <textarea
            name="experience"
            value={resumeData.experience}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <textarea
            name="skills"
            value={resumeData.skills}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ResumeForm;
