<?php
	////
	include("../model/Member.php");
	///
	$member=new Member();
	$rows=$member->getAllActiveMember();
	$member=null;
	echo json_encode($rows);
?>