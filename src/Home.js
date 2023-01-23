import './App.css';
import { useState } from 'react';
import $ from "jquery";
import Swal from 'sweetalert2';

//load database
function Load(user) {
  $.ajax({
    type: "POST",
    url: "https://teakings.000webhostapp.com/new/index.php",
      data: {
      mode: 'view',
      uname: user
    },
    dataType: 'json',
    crossDomain: true,
    beforeSend: function() {
    //preloader
    },
    success: function(response) {
    $.each(response, function(i, field) {
    let n = field.name;
    let username = field.username;
    if(response!=="0")
    {
      if (user == username) {
        document.querySelector("#head").innerHTML= n;
        Swal.fire ( "Welcome" ,  n ,  "success" );
      }
      else {
        Swal.fire ( 'Oops' , 'Invalid Username  or Password' ,  'error' );
      }
      
    }
  
     }); //each. Response
    }// success function
   }); //ajax ends
  }

function Home() {
  const [username, setUsername] = useState("");
  const [pword, setPword] = useState("");
  const login = (a) => {
    Load(username);
  }

  return (
    <div className="container">
      <p id='head' className='h1'></p>
      <input type="text" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
      <br/>
      <input type="text" className='form-control' value={pword} onChange={(e) => setPword(e.target.value)}/>
      <button className='btn btn-danger float-end mt-3' onClick={() => login(username)}>Confirm</button>
    </div>
  );
}

export default Home;
