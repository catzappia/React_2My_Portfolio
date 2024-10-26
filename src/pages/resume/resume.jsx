import './resume.css'; // Import the CSS for styling

const Resume = () => {
  return (
    <div className="main">
    <section className="resume-section">
      <h2 className="resume-title">My Resume</h2>

      {/* Skills Section */}
      <div className="resume-container">
        <h3 className="resume-subtitle">Skills</h3>
        <ul className="resume-list">
          <li>JavaScript / React.js</li>
          <li>HTML / CSS</li>
          <li>Node.js / Express</li>
          <li>Database Management (SQL / MongoDB)</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="resume-container">
        <h3 className="resume-subtitle">Experience</h3>
        <ul className="resume-list">
          <li>Freelance Copywriter (2022 - Present)</li>
          <li>Retail Associate (2015 - 2021)</li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="resume-container">
        <h3 className="resume-subtitle">Education</h3>
        <ul className="resume-list">
          <li>Certificate in Full Stack Web Development, Rutgers University (2024)</li>
          <li>B.A in English, University of Phoenix (2020 - 2024)</li>
        </ul>
      </div>

      {/* LinkedIn Link */}
      <div className="resume-container">
      <div className="linkedin-section">
        <p>Find out more on my <a href="CatherineZappia.pdf" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>.</p>
        <p>Or you can <a href="https://drive.google.com/file/d/1WgJ7XXi_v3iEjJrA66WlwaDlE8y29WAP/view?usp=sharing" download className="resume-download">download my resume here</a>.</p>
      </div>
      </div>
    </section>
    </div>
  );
};

export default Resume;
