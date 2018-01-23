<?php
$array=array(
 "empleados"=>array(
  array("nombre"=>"eugenio","edad"=>"33"),
  array("nombre"=>"maria","edad"=>"33")
 ),
 "autos"=>array(
  array("marca"=>"Ford","modelo"=>"2016"),
  array("marca"=>"Nissan","modelo"=>"2015"),
  array(
   "marca"=>array(
    array("submarca"=>"sub0"),
    array("submarca"=>"sub1"),
    array("submarca"=>"sub2")
   )
  )
 )

);
//print_r($array);
echo json_encode($array);
?>