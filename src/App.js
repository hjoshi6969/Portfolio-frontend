import React, { useEffect } from 'react'
import { Button, Alert, Breadcrumb, cards, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
function App() {
  // useEffect(()=>{
  //   fetch('http://localhost:8000/skills')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // })
  return (
    <div>
      <Navigation />
      <div className='moto'>Born To inspire</div>
      <Hero/>
      <Projects/>
    </div>
  )
}

export default App