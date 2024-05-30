<?php
// Connexion bdd
require_once('configConnexion.php');
$maCnx = openConnexion();

// CREATION des tables
$ch = "CREATE TABLE IF NOT EXISTS voiture(id INT AUTO_INCREMENT,
                                        immat VARCHAR(50),
                                        couleur VARCHAR(50),
                                        PRIMARY KEY(id))";

// axec pour exécuter des requétes de màj.
$maCnx->exec($ch);

// Insérer des data
$ch ="INSERT INTO voiture(immat, couleur
VALUES ('1001', 'Blue'), ('1002', 'Rouge'), ('1003', ('Jaune');";
$maCnx->prepare($ch)->execute();