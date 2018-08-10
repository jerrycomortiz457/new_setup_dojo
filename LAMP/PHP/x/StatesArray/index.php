<?php
	$states = array('CA','WA','VA','UT','AZ');
	
	function forloop_dropdown($arr){
	echo '<select name="states">';
    for ($index = 0;$index < count($arr); $index++)
	{
		echo '<option value="'. $arr[$index].'">'.$arr[$index].'</option>';
	}
	echo "</select>";
	}

	function foreach_dropdown($arr){
		echo '<select name="states">';
		foreach($arr as $value)
		{
			echo '<option value="'.$value.'">'.$value.'</option>';
		}
		echo "</select>";
	}

	 forloop_dropdown($states);
 	 foreach_dropdown($states);	
	 array_push($states, 'NJ', 'NY', 'DE');
     foreach_dropdown($states);
     
?>