import React from 'react'

const resumeData = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resume Builder</title>
  <h1>Resume Builder</h1>
  <form id="resumeForm">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required="" />
    <br />
    <br />
    <label htmlFor="title">Title:</label>
    <input type="text" id="title" name="title" required="" />
    <br />
    <br />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required="" />
    <br />
    <br />
    <label htmlFor="phone">Phone:</label>
    <input type="text" id="phone" name="phone" required="" />
    <br />
    <br />
    <label htmlFor="website">Website:</label>
    <input type="text" id="website" name="website" required="" />
    <br />
    <br />
    <label htmlFor="location">Location:</label>
    <input type="text" id="location" name="location" required="" />
    <br />
    <br />
    <label htmlFor="education">Education:</label>
    <textarea
      id="education"
      name="education"
      rows={4}
      required=""
      defaultValue={""}
    />
    <br />
    <br />
    <label htmlFor="experience">Experience:</label>
    <textarea
      id="experience"
      name="experience"
      rows={4}
      required=""
      defaultValue={""}
    />
    <br />
    <br />
    <label htmlFor="skills">Skills:</label>
    <input type="text" id="skills" name="skills" required="" />
    <br />
    <br />
    <button type="submit">Save</button>
  </form>
  <hr />
  <h2>Generated Resume:</h2>
  <pre id="generatedResume" />
</>

    </div>
  )
}

export default resumeData
