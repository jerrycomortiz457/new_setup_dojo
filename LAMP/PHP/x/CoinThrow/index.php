<?php	
	function coin_throw($number_of_throw){		
		echo '<h2><u>Starting the Program: Coin Throw</u></h2>';
		$head_count = 0;
		$tail_count = 0;
		for ($throw = 1; $throw <= $number_of_throw;$throw++)
		{
			$coin = rand(0,1);			
			if ($coin == 0){
				$head_count += 1;
				echo 'Attempt #'.$throw.': Throwing a coin... It'."'s a head! ... Got $head_count head(s) so far and $tail_count tail(s) so far<br>";	
			}
			else if ($coin == 1){	
				$tail_count += 1;
				echo 'Attempt #'.$throw.': Throwing a coin... It'."'s a tail! ... Got $head_count head(s) so far and $tail_count tail(s) so far<br>";
			}				
					
		}
		echo '<h2><u>Ending the program - thank you!</u></h2>';
	}

    coin_throw(5000);    
?>