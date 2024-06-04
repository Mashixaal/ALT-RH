<?php
/*
    POO
    -- Classe : entité qui englobe des objets
    -- Objets : est une instance d'une classe
    Concepts de l'OO
    -- Encapsulation : camoufler (cacher) les données et les méthodes
    -- Abstraction : Créer des fonctions et des variables abstraites.
*/
class Personne {
    /*
    Attributs : les variables de classe
    Modificateurs : public - private - protected - "NEANT"(on met rien du tout)

    */
    private $nom = "Shalhoub";
    private $prenom = "Tony";
    private $age = 70;
    private $fonction = "Acteur";
    private $salaire = 1850;

    // Le constructeur : créer des objets + initialiser les attributs
    public function __construct($n, $p, $a, $f, $s)
    {
        $this->nom = $n;
        $this->prenom = $p;
        $this->age = $a;
        $this->fonction = $f;
        $this->salaire = $s;
    }
    // Getters : méthodes offrant la possibilité de consulter des attributs privés
    // en dehors de la classe
    public function getNom(){
        return $this->nom;
    }
    public function getPrenom(){
        return $this->prenom;
    }
    public function getAge(){
        return $this->age;
    }
    public function getFonction(){
        return $this->fonction;
    }
    public function getSalaire(){
        return $this->salaire;
    }
    // Setters : donner l'accès à des attributs privés pour modification
    public function setSalaire($nvx){
        $this->salaire = $nvx;
    }
    public function setAge($nvx){
        $this->age = $nvx;
    }
    // méthode __toString(): affiche les attributs de la classe 
    // sous forme de chaine de caractères
    public function __toString()
    {
        return $this->nom . " " . $this->prenom . " " . $this->salaire;
    }
}
// Création d'objet : 
$p1 = new Personne("O'Brian","Walter",26,"Scorpion",55000); // Personne() : c'est la fonction constructeur par défaut
$p2 = new Personne("Jane","Patrick",47,"Mentalist",5000);
echo "L'objet p1 : " . $p1->getPrenom() . " " . $p1->getSalaire();
echo "<br>";
echo "L'objet p2 : " . $p2;
echo "<br>";
$p2->setSalaire(3500);
echo "La salaire de l'objet p2 deviendra : " . $p2;

// TAF : Créer une fonction 
// Sanctionner(Personne $pers, $valeur){}
// : qui permet de sanctionner la personne $oers en réduisant son salaire
// de $valeur%
