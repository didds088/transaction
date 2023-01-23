import './App.css';
import { useState } from 'react';
import dbClass from './classes';



function Home() {
  const [username, setUsername] = useState("");
  const [pword, setPword] = useState("");


  return (
    <div className="container">
      <p id='head' className='h1'></p>
      <input type="text" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
      <br/>
      <input type="text" className='form-control' value={pword} onChange={(e) => setPword(e.target.value)}/>
      <button id='btn' className='btn btn-danger float-end mt-3' onClick={() => dbClass.load(username,pword)}>Login</button>
    </div>
  );
}

export default Home;
