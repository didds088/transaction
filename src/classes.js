import React from 'react';
import Swal from 'sweetalert2';

class Database extends React.Component {

//login
async load(user) {
  let data= {
    type: "view",
    uname: user
  };
  const response = await fetch("https://teakings.000webhostapp.com/new/index.php", {
    method: 'post',
    mode: "cors",
    body: JSON.stringify(data)
  })
  const dbJSON = await response.json(); //get json
  if (dbJSON==="0") {
    console.log("null");
  }
  else {
    dbJSON.forEach(field => { // separate json
    console.log(field.name);
    document.querySelector("#head").innerHTML=field.name 
    });
  }
}

//another
async load2() {
  let data= {
    type: "all",
  };
  const response = await fetch("https://teakings.000webhostapp.com/new/index.php", {
    method: 'post',
    mode: "cors",
    body: JSON.stringify(data)
  });
  const dbJSON = await response.json(); //get json
  if (dbJSON==="0") {
    console.log("null");
  }
  else {
    dbJSON.forEach(field => { // separate json
    console.log(field.name);
    });
  }
  
}

}
const dbClass = new Database();

export default dbClass;