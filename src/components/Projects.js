import React, { useEffect, useState, useRef } from 'react';
import './Projects.css';

function formatDateToMonthYear(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const renderProjects = () => {
    return projects.map((project) => (
      <div className='projects' key={project.id}>
        <img src='' alt=''/>
        <div className='description'>{project.image_link}</div>
        <div className='info-container'>
          <div className='date'>{formatDateToMonthYear(project.date_made)}</div>
          <div className='skills'>
            {JSON.parse(project.skills_array).join(', ')}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className='project-main-container'>
        <div className='project-container'>{renderProjects()}</div>
      </div>
    </div>
  );
}

export default Projects;
