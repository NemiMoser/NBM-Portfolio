import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
  const resumeUrl = '/Nohemi-Resume.pdf';

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Nohemi-Resume.pdf';
    link.click();
  };

    return (
      <div>
        <h2>resume</h2>
        <div>front-end skills:
          <br></br>
          -HTML 
          <br></br>
          -CSS
          <br></br>
          -JavaScript
          <br></br><br></br>
          back-end skills:
          <br></br>
          -Node.js 
          <br></br>
          -Express.js 
          <br></br>
          -RESTful APIs
        </div>
        <div id="resumeSection">
        <p>download my resume here for a complete list of skills</p>
          <button onClick={downloadResume}>
            <FontAwesomeIcon icon={faDownload} /> Download
          </button>
        </div>
      </div>
    );
  }
  