// Exo 1

// let prenom;
// prenom = prompt("saisir votre prenom");
// alert("bienvenu " + prenom);

// Exo 2

// let i = parseInt(prompt("choisir un nombre"));
// let x = parseInt(prompt("choisir un nombre"));
// alert("le réssultat est " + (i + x));

// Exo 3
let i = parseInt(prompt("saisir le prix de fabrication"));
let x = parseInt(prompt("saisir le prix de vente"));

if(i>x){
    alert("perte de fabrication" + (i - x));
} else{
    if(i<x){
        alert("profit de vente" + (i - x));
    }
} 

