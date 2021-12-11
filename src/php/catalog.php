<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
  header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization");

  include("connect.php");

  $strSQL1="SELECT * FROM goods ORDER BY name_good";
  $result1=mysql_query($strSQL1) or die("Не могу выполнить запрос!");

 ?>
