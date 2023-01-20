import './App.css';
import { useState } from 'react';

function Home() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const face = (a,b) => {
    alert(a +" "+ b);
  }

  return (
    <div className="container">
      <h2>heads</h2>
      <input type="text" className='form-control' value={name2} onChange={(e) => setName2(e.target.value)} />
      <br/>
      <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
      <button className='btn btn-danger float-end mt-3' onClick={() => face(name,name2)}>Confirm</button>
    </div>
  );
}

export default Home;
