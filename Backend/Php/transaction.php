<?php
// Connexion bdd
require_once('configConnexion.php');
$maCnx = openConnexion();
// CREATION des tables
$ch = "CREATE TABLE IF NOT EXISTS client(idClient INT AUTO_INCREMENT,
                                        prenom VARCHAR(50),
                                        nom VARCHAR(50),
                                        datenaissance DATE,
                                        tel VARCHAR(50),
                                        adresse VARCHAR(50),
                                        email VARCHAR(50),
                                        PRIMARY KEY(idClient))";
$maCnx->exec($ch);
$ch = "CREATE TABLE IF NOT EXISTS compte(idCompte INT AUTO_INCREMENT,
                                        pseudo VARCHAR(50),
                                        mdp VARCHAR(50),
                                        idClient INT,
                                        PRIMARY KEY(idCompte),
                                        FOREIGN KEY(idClient) REFERENCES client(idClient))";
// exec pour exécuter des requêtes de màj.
$maCnx->exec($ch);

if (isset($_REQUEST['fname']) && isset($_REQUEST['lname']) &&
    isset($_REQUEST['dn']) && isset($_REQUEST['email']) &&
    isset($_REQUEST['tel']) && isset($_REQUEST['adr']) &&
    isset($_REQUEST['pseudo']) && isset($_REQUEST['mdp'])
) {
    $fname = $_REQUEST['fname'];
    $lname = $_REQUEST['lname'];
    $dn = $_REQUEST['dn'];
    $email = $_REQUEST['email'];
    $tel = $_REQUEST['tel'];
    $adr = $_REQUEST['adr'];
    $pseudo = $_REQUEST['pseudo'];
    $mdp = password_hash($_REQUEST['mdp'], PASSWORD_DEFAULT);
    $mdp = $mdp . rand();
    // Insérer des data
    $ch ="INSERT INTO client(prenom, nom, datenaissance, tel, adresse, email) VALUES (?,?,?,?,?,?);";
    $maCnx->prepare($ch)->execute([$fname,$lname,$dn,$tel,$adr,$email]);
    // Chercher la valeur du dernier client inséré.
    $ch = "SELECT MAX(idClient) FROM client;";
    $req = $maCnx->prepare($ch);
    $req->execute();
    while ($d = $req->fetch()) {
        $fk_client = $d[0];
    }
    // $fk_client = $maCnx->lastInsertId();
    $ch ="INSERT INTO compte(pseudo, mdp, idClient) VALUES (?,?,?);";
    $maCnx->prepare($ch)->execute([$pseudo,$mdp,$fk_client]);

    $req->closeCursor();

}
