import React, { useEffect } from 'react'

function App() {
  useEffect(()=>{
    fetch('http://localhost:8000/projects')
    .then(res => res.json())
    .then(data => console.log(data))
  })
  return (
    <div>App</div>
  )
}

export default App