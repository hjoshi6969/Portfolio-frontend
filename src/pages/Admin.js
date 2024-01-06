import React, { useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom';

function admin() {
const[id, setid] = useState("");
const[pass, setpass] = useState("");
const navigate = useNavigate(); 

function handleIdChange(e){
    setid(e.target.value);
}

function handlepassChange(e){
    setpass(e.target.value);
}

function handleSubbmit(e){
    if (id == "2166136" && pass == "HJ2166136") {
        alert("Good Bich")
        e.preventDefault();
        navigate('/dashboard');
    } else {
        alert("Wrong Credentials")
        e.preventDefault();
    }
}

  return (
    <>
        <main>
            <div className='title'>
                <h1>Login as a Admin</h1>
            </div>
            <form onSubmit={handleSubbmit}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Admin login Id</label>
                  <input type="text" class="form-control " id="exampleInputEmail1"   placeholder="Enter Id" value={id} onChange={handleIdChange} required/>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={pass} onChange={handlepassChange} required/>
                </div>
                <div className='button-container'>
                    <button type="submit" id='button' class="btn btn-primary">Login</button>
                </div>
            </form>
        </main>
    </>
  )
}

export default admin