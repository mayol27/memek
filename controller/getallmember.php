<?php
	////
	include("../model/Member.php");
	///
	$member=new Member();
	$rows=$member->getAllMember();
	$member=null;
	echo json_encode($rows);
?>