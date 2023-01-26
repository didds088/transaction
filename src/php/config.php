<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

class Database {
   
 public function connect() {
   $con = mysqli_connect("localhost","id19801253_didds088","Despro4196#1988","id19801253_school") or die ("could not connect database" . mysqli_connect_error());
   return $con;
 }
//  VIEW DATA
 public function view() {
    $data=array();
    $conn=$this->connect();
    $uname = $_POST['uname'];
    $sql = "SELECT * FROM profile WHERE username='$uname' ";
    $q = mysqli_query($conn, $sql);
    $rowcount=mysqli_num_rows($q);
    if ($rowcount>0)
    {
    while ($row=mysqli_fetch_object($q)){
    $data[]=$row;
    }
    } 
    else
    {
    $data[]="0";
    }
    echo json_encode($data);
 }

// second view
public function view2(e) {
  $conn=$this->connect();
  $uname= e;
  $sql = "SELECT * FROM profile WHERE username='$uname' ";
  $ret_data=mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($ret_data);
  $result_response = json_encode($row);
  echo($result_response);
}


}

?>