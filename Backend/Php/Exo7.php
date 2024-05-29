<?php
$players = [
    ['nom' => 'Mehwish', 'score' => 150], 
    ['nom' => 'Laurent', 'score' => 120],
    ['nom' => 'Ines', 'score' => 98], 
    ['nom' => 'Sondes', 'score' => 153], 
    ['nom' => 'Davide', 'score' => 118]
 ];
function best_player($table) {
    $max = $table[0];
foreach($table as $value){
    if($value['score'] > $max['score'])
        $max = $value;
    }
return $max;
}
$result = best_player($players);
echo '<p> Best player is ' . $result['nom'] . ' with a score of '. $result['score'] . '</p>';