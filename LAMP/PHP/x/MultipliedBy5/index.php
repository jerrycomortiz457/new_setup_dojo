<?php
    $A =array(2,4,10,16);
    function multiply($arr, $multiplier)
    {
        $products = array();
        for($i = 0; $i < count($arr); $i++)
        {
            $products[] = $arr[$i] * $multiplier;
        }
        return $products;
        
    }
    $B = multiply($A ,2);
    var_dump($B);
?>