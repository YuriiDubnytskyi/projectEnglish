<?php

$name = 'user';
$array = $_GET['array'];

$file = file_get_contents('data.json');

$taskList = json_decode($file,true);

$taskList[]= array($name => $array );

file_put_contents('data.json', json_encode($taskList,JSON_UNESCAPED_UNICODE));

?>