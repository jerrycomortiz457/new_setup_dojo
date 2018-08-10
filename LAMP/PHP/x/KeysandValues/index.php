<?php
	$users = array("first_name" => "Michael", "last_name" => "Choi");
	
	echo 'There are '.count($users).' keys in this array:<br>';
	
	foreach($users as $key => $value)
	{
		
		echo "         {$key}<br>";
			
	}
	foreach($users as $key => $value)
	{
		echo "The value in the key '{$key}' is '{$value}'.<br>";
    }
?>