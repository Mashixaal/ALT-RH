<?php
function openConnexion(){
    try {
        $bdd = new PDO('mysql:host=localhost;
        bdname=exemple;charset=utf8','root','');
        echo "Connexion réussie";
    } catch (Exception $e) {
        die('Erreur vérifie votre chaine de connexion' . $e->getMessage());
    }
    return $bdd;
}