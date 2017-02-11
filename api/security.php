<?php 

$app = new \Slim\App();

$app ->get('/secure', function(){
	print("Security protocols");


});

$app ->get('/secure/login', function(){
	print("Login check");


});

 ?>