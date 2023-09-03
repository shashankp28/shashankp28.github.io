import React from 'react';
import './Projects.css';
import data from '../../constants.json';

export const Projects = () => {
  const projects = data['projects'];

  return (
    <div className="projects" id="projects">
      <h1 className='project-heading'>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-block">
            <div className="project-content">
              <img src={project.photo} alt={project.title} className="project-image" loading="lazy"/>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul>
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
