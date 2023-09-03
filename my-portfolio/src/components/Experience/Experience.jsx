import React from 'react';
import './Experience.css';
import data from "../../constants.json";

export const Experience = () => {
  const educationData = data["education"];
  const workData = data["work"];

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
        </div>
      </div>
      <div className="work">
        <h1>Work</h1>
        <div className="work-list">
          {workData.map((work, index) => (
            <div key={index} className="work-item">
              <div className="work-header">
                <img src={work.logo} alt={work.name} className="work-logo" loading="lazy"/>
                <div className="work-details">
                  <h2>{work.name}</h2>
                  <p>{work.role}</p>
                  <p>{work.start} - {work.end}</p>
                </div>
              </div>
              <div className="work-descriptions">
                <ul>
                  {work.descriptions.map((description, idx) => (
                    <li key={idx}>{description}</li>
                  ))}
                </ul>
              </div>
              <div className="technologies">
                {work.technologies.map((technology, idx) => (
                  <div className="one-technology">
                    <img key={idx} src={technology.image} alt={technology.name} className="technology-icon" loading="lazy"/>
                    <p className='technology-para'>{technology.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
