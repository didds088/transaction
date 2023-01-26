import React from 'react';
import $ from "jquery";
import Swal from 'sweetalert2';

class Database extends React.Component {

//login
load(user,pass) {
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
      document.querySelector("#btn").innerHTML = "Loading....";
      },
      success: function(response) {
      $.each(response, function(i, field) {
      let n = field.name;
      let username = field.username;
      let password = field.password;
      if(response!=="0")
      {
        if ((user === username) && (pass === password)) {
          document.querySelector("#head").innerHTML= n;
        //Swal.fire ( "Welcome" ,  n ,  "success" );
          document.querySelector("#btn").innerHTML = "Login";
        }
        else {
          Swal.fire ( 'Oops' , 'Invalid Username  or Password' ,  'error' );
          document.querySelector("#btn").innerHTML = "Login";
        }      
      }
    
       }); //each. Response
      }// success function
     }); //ajax ends
}

//another
load2(user) {
  let data= {
    mode: 'view2',
    uname: user
  };
  fetch("https://teakings.000webhostapp.com/new/db.php", {
    method: 'post',
    mode: "cors",
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => {
    // response is anything returned API/backend code
   console.log(response.name);
   document.querySelector("#head").innerHTML=response.name
  });
}

}
const dbClass = new Database();

export default dbClass;