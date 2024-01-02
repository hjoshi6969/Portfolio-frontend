import React, { useEffect } from 'react'
import { Button, Alert, Breadcrumb, cards, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navigation from './Navigation'
function App() {
  // useEffect(()=>{
  //   fetch('http://localhost:8000/skills')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // })
  return (
    <div>
      <Navigation />
    </div>
  )
}

export default App