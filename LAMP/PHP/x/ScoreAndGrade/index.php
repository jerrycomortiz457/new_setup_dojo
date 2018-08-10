<?php
	
function score_and_grade($times){	
	for ($counter = 0; $counter < $times; $counter++){
		$score = rand(50,100);
		if ($score < 70){
			echo "<h1>Your Score: {$score}</h1><h2>Your grade is D.</h2>";
		}
		else if ($score >= 70 && $score < 80){
			echo "<h1>Your Score: {$score}</h1><h2>Your grade is C.</h2>";
		}
		else if ($score >= 80 && $score < 90){
			echo "<h1>Your Score: {$score}</h1><h2>Your grade is B.</h2>";
		}
		else if ($score >= 90 && $score <= 100){
			echo "<h1>Your Score: {$score}</h1><h2>Your grade is A.</h2>";
		}
		echo "------------------------------------------";
	}
}	
    score_and_grade(100);    
?>