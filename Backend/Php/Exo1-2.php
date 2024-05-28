<?php
$voitures = 3;
$motos = 6;


// Avec des apostrophes
echo "J'ai ' . $voitures . ' voitures et ' . $motos . ' motos, j'ai donc ' . $voitures + $motos . ' véhicules.";

echo '<br/>';

// Avec des guillemets
echo "J'ai $voitures voitures et $motos motos, j'ai donc " . ($voitures + $motos) . " véhicules.";
?>