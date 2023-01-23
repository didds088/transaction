<?php
require "connect.php";
$mode = $_POST['mode'];
$dbObj = new Database();

if ($mode=="view") {
    $dbObj->view();
}

?>