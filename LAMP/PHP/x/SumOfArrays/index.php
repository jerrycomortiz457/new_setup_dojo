<?php
$addends = array(1, 2, 5, 10, 255, 3);

for ($i=0;$i<count($addends); $i++){
    echo $addends[$i]+=$addends[$i] .'<br>';
}



?>