import React from 'react'

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className='navbar-brand mb-0 h1 p-3'>JSR</a>
        <button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link p-3" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-3" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-3" href="#">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-3" href="#">Contact me</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navigation