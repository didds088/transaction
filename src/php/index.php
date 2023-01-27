<?php
require "config.php";
$raw_data = file_get_contents('php://input');
$Posts = json_decode($raw_data);
$mode = $Posts -> mode;
$username = $Posts -> uname;
$dbObj = new Database();

if ($mode=="view") {
    $dbObj->view();
}
else if ($mode=="view2") {
    $dbObj->view2($username);
}

?>