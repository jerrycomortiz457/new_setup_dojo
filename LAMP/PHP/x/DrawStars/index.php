<?php
	function draw_star($arr){	
		for ($i = 0; $i < count($arr); $i++){			
			if(is_string($arr[$i]))
			{	$first_letter = substr($arr[$i],0,1);
				$arr[$i] = strlen($arr[$i]);
				for($j = 0; $j < $arr[$i]; $j++){					
					echo strtolower($first_letter); 
				}
			}
			else{
				for($j = 0; $j < $arr[$i]; $j++){
					echo '*';
				}	
			}				
			echo '<br>';				
		}
	}

	$x = array(4, 6, 1, 3, 5, 7, 25);
	draw_star($x);
	echo '<br>';
	$x = array(4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith");
    draw_star($x);    
?>