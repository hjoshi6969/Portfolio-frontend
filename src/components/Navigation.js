import React from 'react'
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
        <nav className='navbar navbar-expand-lg navbar-dark'>
        <a className='navbar-brand p-3'>HJ</a>
        <button class="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active p-3">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item  p-3">
              <a class="nav-link" href="#">Skills</a>
            </li>
            <li class="nav-item p-3">
                <a class="nav-link">Projects</a>
            </li>
            <li class="nav-item p-3">
              <a class="nav-link" href="#">Contact me </a>
            </li>
            <li class="nav-item p-3">
              <Link to="/admin" className="nav-link">Admin</Link>
            </li>
          </ul>
        </div>
    </nav>
    </header>
  )
}

export default Navigation