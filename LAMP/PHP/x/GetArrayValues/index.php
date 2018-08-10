<?php	
	$A = array(2,3,'hello');
	function print_lists($arr)
	{
		echo '<ul>';
		for ($i = 0; $i < count($arr); $i++)
		{
			echo '<li>'.$arr[$i].'</li>';	
		}
		echo '</ul>';
	}
    print_lists($A);
?>