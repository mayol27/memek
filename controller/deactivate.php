<?php
	////delete member
	////
	include("../model/Member.php");
	$message='Error Deactivate';
	if(isset($_GET['id'])){
		$id=$_GET['id'];
		
		$member=new Member();
		$ok=$member->deactivate($id);
		if($ok) $message='Member Deactivated';
		header('location:../views/memberlist.html');
	}
	return $message;
	
?>