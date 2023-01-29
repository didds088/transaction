import './App.css';
import { useState } from 'react';
import dbClass from './classes';
import logo from './logo.png';



function Home() {
  const [username, setUsername] = useState("");
  const [pword, setPword] = useState("");
 
 
  return (
    <div className="container">

      <div className='container-login100'>
      <div className="wrap-login100">
      <p className='h1 text-center fw-bolder'>Welcome <span id='head'></span></p>
      <img src={logo} alt="logo" className='img'/>
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
      <input type="text" className='form-control' aria-describedby="emailHelp1" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <div id="emailHelp1" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
      <input type="text" className='form-control' aria-describedby="emailHelp" value={pword} onChange={(e) => setPword(e.target.value)}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      
      <div className="d-grid gap-2">
      <button id='btn' className='btn btn-primary rounded-pill fw-bold' onClick={() => dbClass.load(username)}>LOGIN</button>
      <button id='btn' className='btn btn-primary rounded-pill' onClick={() => dbClass.load2()}>dis</button>
      </div>
      </div>
    </div>


    </div> 
  );
}

export default Home;
