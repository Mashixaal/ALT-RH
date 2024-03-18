// Exo 1

// let prenom;
// prenom = prompt("saisir votre prenom");
// alert("bienvenu " + prenom);

// Exo 2

// let i = parseInt(prompt("choisir un nombre"));
// let x = parseInt(prompt("choisir un nombre"));
// alert("le réssultat est : " + (i + x));

// Exo 3
// let i = parseFloat(prompt("saisir le prix de fabrication"));
// let x = parseFloat(prompt("saisir le prix de vente"));

// if(i > x){
//     alert("perte de fabrication est " + (i - x));
// } else{
//     if(i < x){
//         alert("profit de vente est " + (x - i));
//     }
// } 

// Exo 4

let a = parseInt(prompt("Entrer un entier"));
let b = parseInt(prompt("Entrer un entier"));
let c = parseInt(prompt("Entrer un entier"));
let max = a;

if(b > max){
    max = b;
}
if(c > max){
    max = c;
}

document.write(a +";"+ b +";" +c +" le max est "+ max)