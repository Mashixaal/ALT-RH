<?php
$tabE1 = [ 'Frédérique' => 12, 'Silvia' => 3, 'Julien' => 19, 'Lionel' => 12, 'Mario' => 12, 'Andrea' => 9, 'Gérard' => 3 ];

//4.1
echo "<ol>";
foreach($tabE1 as $key => $value)
{
    echo "<li>". $key ."</li>";
}  
echo "</ol>";

//4.2
echo "<table>";
foreach($tabE1 as $key => $value)
{
    echo "<tr>";
    echo "<td>". $key ."</td>";
    echo "<td>". $value ."</td>";
    echo "</tr>";
}  
echo "</table>";


$tabE2 = [19=>["julien"],12=>["Frédérique ","Lionel ","Mario"],9=>["Andrea"],3=>["Gérard","Silvia"]];

//4.3
echo "<ol>";
foreach($tabE2 as $key => $value)
{
    foreach($value as $v)
    echo "<li>". $v ."</li>";
    $i++ ;
}  
echo "</ol>";

//4.4
echo "<table>";
foreach($tabE2 as $key => $value)
{
    echo "<tr>";
    echo "<td>". $key ."/20 </td>";
    foreach($value as $v){
    
        echo "<td>". $v."</td>";
    }
    $i++ ;
    echo "</tr>";
}  
echo "</table>";