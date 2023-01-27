import './App.css';
import { useState } from 'react';
import dbClass from './classes';



function Home() {
  const [username, setUsername] = useState("");
  const [pword, setPword] = useState("");
 
 
  return (
    <div className="container">
      <div className='login-width'>
      <p className='h1'>Welcome <span id='head'></span></p>
      <input type="text" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
      <br/>
      <input type="text" className='form-control' value={pword} onChange={(e) => setPword(e.target.value)}/>
      <button id='btn' className='btn btn-danger float-end mt-3' onClick={() => dbClass.load(username)}>Login</button>
      <button id='btn' className='btn btn-danger float-end mt-3' onClick={() => dbClass.load2()}>dis</button>
      </div>
    </div> 
  );
}

export default Home;
