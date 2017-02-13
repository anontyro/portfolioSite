<?php 

$app = new \Slim\App();

$blogTable = "myblog";

$app ->get('/blog', function(){
	print("Blog root for API");
});

//return blog posts from the site
$app->get('/blog/{id}', function($request){

	require_once('dbconnect.php');

	$id = $request->getAttribute('id');
	$query = "select * from salesdata where id=$id";
	$result = $mysqli->query($query);

	$output[] = $result->fetch_assoc();
	
	header('Content-Type: application/json');

	print json_encode($output);


});

//return blog lists of X number

$app->get('/blog/list/{number}', function($request){

	require_once('dbconnect.php');

	$num = $request->getAttribute('number');
	$query = "SELECT * FROM $blogTable WHERE draft=0 ORDER BY published DESC LIMIT $num";
	$result = $mysqli->query($query);

	$output[] = $result->fetch_assoc();
	
	header('Content-Type: application/json');

	print json_encode($output);


});

 ?>