import React from 'react';
import './Experience.css';
import data from "../../constants.json";

export const Experience = () => {
  const educationData = data["education"];

  return (
    <div className="experience" id="experience">
      <div className="education">
        <h1>Education</h1>
        <div className="education-list">
          {educationData.map((education, index) => (
            <div key={index} className="education-item">
              <h2 className='university'>{education.name}</h2>
              <p className='description'>{education.description}</p>
              <p>{education.start} - {education.end}</p>
              <p>Score: {education.score}</p>
            </div>
          ))}
          <div className="arrow"></div> {/* Add the arrow */}
        </div>
      </div>
      <div className="work">
        <h1>Work</h1>
      </div>
    </div>
  );
};
