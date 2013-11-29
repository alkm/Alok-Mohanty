<?php
/*
* Project :- MyWorld
* Date Created:- 9th Nov 2013
* @author:- Alok 
* @name:- condb.php
* @usage:- Opening connection to db
*/
	$dbconnect = mysql_connect("localhost", "root", "");
	//$dbconnect = mysql_connect("203.129.204.130", "root", "mind.fire");
	if (!$dbconnect){
	  die('Could not connect: ' . mysql_error());
	}

	if (!mysql_select_db('myworld')){
		echo "Cannot connect to database 'myworld'";
		exit;
	}
?>
