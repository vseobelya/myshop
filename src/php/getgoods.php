<?php
header("Content-Type: application/json; charset=UTF-8");
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");
$conn = new mysqli("localhost", "goods", "mysql", "");
$output = [];
// if (!($conn->connect_errno)) {
//  if (isset($_GET["id"])) {
//    $id = $conn->real_escape_string($_GET["id"]);
//    $q = $conn->query("select * from goods where id = " . $id);
//    if ($row = $q->fetch_assoc()) {
//      $output = ["id" => $row["id"], "name" => $row["name"],
//      "description" => $row["description"], "price" => $row["price"]];
//    }
//  }
//  else {
   $q = $conn->query("select * from plants order by name");
   while ($row = $q->fetch_assoc()) {
     $output[] = ["id" => $row["id_good"], "name" => $row["name_good"],
     "price" => $row["price_good"]];
   }
 }
 $q->close();
 $conn->close();
// }
echo json_encode($output, JSON_UNESCAPED_UNICODE);
