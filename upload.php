<?php

// new filename
//$filename = 'pic_'.date('YmdHis') . '.jpeg';
$filename=$_GET['name'].'.jpeg';
$lastname=$_GET['lastname'];
$firstname=$_GET['firstname'];
$repof=$_GET['repof'];

$url = '';
$conn;

try{
	$conn=new PDO("mysql:hostname=localhost;dbname=bhoa",'root','');
	$sql="INSERT INTO member(lastname,firstname,repof,image) values(?,?,?,?)";
	$stmt=$conn->prepare($sql);
	$stmt->execute(array($lastname,$firstname,$repof,$filename));
	$conn=null;
}catch(PDOException $e){ echo $e->getMessage();}



if( move_uploaded_file($_FILES['webcam']['tmp_name'],'upload/'.$filename) ){
 $url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['REQUEST_URI']) . '/upload/' . $filename;
}

// Return image url
echo $url;

?>