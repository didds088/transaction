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
show(n,a) {
    Swal.fire (n + a);
}

}
const dbClass = new Database();

export default dbClass;