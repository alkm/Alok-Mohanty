<?php
session_start();
require 'Slim/Slim.php';

$app = new Slim();

$app->post('/logIn', 'logIn');
$app->post('/signUp', 'signUp');
$app->post('/getChatList', 'getChatList');


$app->run();
$rows = 0;

function logIn(){

	$registration_table = "registration_table";
    if(!empty($_POST['loginEmail']) && !empty($_POST['loginPassword'])) {
        // normally you would load credentials from a database.
        // This is just an example and is certainly not secure
        $db = getConnection();
        try {
            $email = mysql_real_escape_string($_POST['loginEmail']);
            $password = mysql_real_escape_string($_POST['loginPassword']);


            $query = "SELECT * FROM ".$registration_table." WHERE email = '$email' AND password = '$password'";
            $result = mysql_query($query);
            $rows = mysql_num_rows($result);
        }
        catch(Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
        }

        if($rows > 0){
            while($e = mysql_fetch_assoc($result)){
                $output[] = $e;
                }
            $_SESSION['email'] = $email;
            $firstname =$output[0]['firstname'];
            $email =$output[0]['email'];
            $arr = array("status"=>true, "msg"=>"Logged In successfully", "firstname"=>$firstname, "email"=> $email);
            echo json_encode($arr);
        }
        else {
            $error = array("status"=>false, "msg"=>"Invalid Login...");
            echo json_encode($error);
            }
	}
	mysql_close( );

}

function signUp(){
    $db = getConnection();
    $registration_table = "registration_table";
    $firstName = mysql_real_escape_string($_POST['firstName']);
    $lastName = mysql_real_escape_string($_POST['lastName']);
    $gender = mysql_real_escape_string($_POST['gender']);
    $email = mysql_real_escape_string($_POST['email']);
    $password = mysql_real_escape_string($_POST['password']);


    try	{
        $query="SELECT COUNT(email) FROM `".$registration_table."` WHERE email='".$email."'";
        $result = mysql_query($query);
        $total = mysql_fetch_array($result);

        }
        catch(Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
    }


    if($total[0] == 0){
        $query="INSERT INTO ".$registration_table."(firstname, lastname, gender, email, password) VALUES ('$firstName' ,  '$lastName', '$gender' , '$email', '$password')";

        $result = mysql_query($query);
        $count = mysql_insert_id();
        if($count > 0){
            $arr = array("status"=>true, "msg"=>"User created successfully, login to proceed", "data"=>$email);
            echo json_encode($arr);
        }
    }
    else{
        $arr = array("status"=>true,"msg"=>"Email already exist. Try a new one");
        echo json_encode($arr);
    }
    mysql_close( );

}


function getChatList(){

	$registration_table = "registration_table";
        $db = getConnection();
        try {


            $query = "SELECT email FROM ".$registration_table;
            $result = mysql_query($query);
        }
        catch(Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
        }
        $email = array();

        while($rows = mysql_fetch_array($result))
        {
            $email[] = $rows['email'];
        }
        $arr = array("status"=>true, "msg"=>"Chat List Fetched", "data"=>$email);
        echo json_encode($arr);
    mysql_close();
}

//Opening connection to database
function getConnection() {

	$dbconnect = mysql_connect("localhost", "root", "");
	//$dbconnect = mysql_connect("203.129.204.130", "root", "mind.fire");
	if (!$dbconnect){
	  die('Could not connect: ' . mysql_error());
	}

	if (!mysql_select_db('myworld')){
		echo "Cannot connect to database 'ibougproject'";
		exit;
	}
}
?>