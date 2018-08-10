<?php
	function get_max_and_min($arr){
		$max = 0;
		$min = $arr[0];		
		$result = array();
		for ($i = 0; $i < count($arr); $i++)
		{	
			if ($arr[$i] > $max){
				$max = $arr[$i];	
			}
			if($arr[$i] < $min){
				$min = $arr[$i];		
			}				
		}			
		$result['max'] = $max;		
		$result['min'] = $min;	
		return $result;
	}	
	$sample = array( 135, 2.4, 2.67, 1.23, 332, 2, 1.02); 
	$output = get_max_and_min($sample);
    var_dump($output);    
?>