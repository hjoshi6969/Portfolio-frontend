import navIcon from './menu-bar.svg'
import './Dashboard.css'
import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
const [projects, setProjects] = useState([]);
const [skills, setSkills] = useState([]);

const closeNav = () => {
  let navbar = document.getElementById("navbar");
  navbar.style.left = "-300px";
}

const openNav = () => {
  let navbar = document.getElementById("navbar");
  navbar.style.left = "0px";
}

function formatDateToMonthYear(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}



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

const renderSkills = () => {
  return skills.map((skill) => (
    <div className='data-header'>
      <div className='td sreal'>{skill.id}</div>
      <div className='td name'>{skill.name}</div>
    </div>
  ));
};

useEffect(() => {
  fetch('http://localhost:8000/projects')
    .then((res) => res.json())
    .then((data) => setProjects(data));
}, []);

useEffect(() => {
  fetch('http://localhost:8000/skills')
    .then((res) => res.json())
    .then((data) => setSkills(data));
}, []);
  return (
    <>
        <header>
          <div>
          <i class="material-icons nav-icon" onClick={openNav}>menu</i>
          </div>
          <div className='username'>
            Himanshu Joshi
          </div>
        </header>
        <div className='navigation' id='navbar'>
          <div className='nav-logo-container'>
            <div className='logo'>HJ</div>
            <div className='nav-close-icon'>
              <i class="material-icons" onClick={closeNav}>close</i>
            </div>
          </div>
          <div className='nav-links'>
            <div className='link-container'>
              <Link to="/" className="nav-link"><i class="material-icons">arrow_back</i><div>Home</div></Link>
            </div>
            <div className='link-container'>
              <a href='#'><div>Dashboard</div></a>
            </div>
            <div className='link-container'>
              <a href='#'><div>Skills</div></a>
            </div>
            <div className='link-container'>
              <a href='#'><div>Meating Requests</div></a>
            </div>
          </div>
        </div>
        <div className='main'>
          <div className='data-container'>
            <div className='title'>Dashboard</div>
            <div className='info'>
              <div className='Skills'>
                <div className='skills-header'>
                  <div className='visit-count-title'>Skills</div>
                  <div className='add-container'>
                    <button type="button" class="btn btn-primary btn-sm add-button">Add</button>
                  </div>
                </div>
                <div className='data'>
                  <div className='data-header'>
                    <div className='th sreal'>Sr. no</div>
                    <div className='th name'>Name</div>
                  </div>
                  {renderSkills()}
                </div>
              </div>
              <div className='visit-count'>
                <div className='visit-count-title'>No. of Visits</div>
                <div className='visit-count-data'>21</div>
              </div>
            </div>
          </div>
          <div className='project-main-container'>
            <div className='Project-heading'>
              <div className='title P-title'>Projects</div>
              <div className='add-container P-add-button-container'>
                <button type="button" class="btn btn-primary btn-sm add-button P-add-button">Add</button>
              </div>
            </div>
            <div className='project-container dpc'>{renderProjects()}</div>
          </div>
        </div>
    </>
  )
}

export default Dashboard