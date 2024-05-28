<?php 
$t = ['a' => 'z', 10=>20, 'toto'=>'titi', 'php'];
$i = 0;
foreach($t as $key => $value)
{
    echo "Clé $i :" . $key;
    echo "valeur $i :" . $value . "<br>";
    $i++;
}