import React from 'react';
import './Resume.css';
import ResumePDF from '../MushbaSiddiqui.pdf';

const Resume = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="resume-modal">
      <div className="resume-content">
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="resume-header">
          <h2>Resume</h2>
          <div className="resume-actions">
            <a 
              href={ResumePDF}
              className="download-btn"
              download="MushbaSiddiqui_Resume.pdf"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fas fa-download"></i>
              Download PDF
            </a>
            <a 
              href={ResumePDF}
              className="view-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fas fa-external-link-alt"></i>
              View in Browser
            </a>
          </div>
        </div>

        <div className="resume-preview">
          <object 
            data={ResumePDF}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>Unable to display PDF file. <a href={ResumePDF}>Download</a> instead.</p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume; 