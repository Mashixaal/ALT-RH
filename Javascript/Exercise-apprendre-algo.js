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

// let a = parseInt(prompt("Entrer un entier"));
// let b = parseInt(prompt("Entrer un entier"));
// let c = parseInt(prompt("Entrer un entier"));
// let max = a;

// if(b > max){
//     max = b;
// }
// if(c > max){
//     max = c;
// }

// document.write(a +";"+ b +";" +c +" le max est "+ max)

// Exo 5

// let t=[];
// for (let i = 0; i < 10; i++) {
//     t[i]= Math.floor(Math.random()*20);
// }
// for (let i = 0; i < 10; i++) {
//     document.write("<h1>" + t[i] + " </h1>") ;
// }
// document.write("<h1>")
// for (let i = 0; i < t.length; i++) {
// let x = t[i];
// if((x <= 4)){
//     document.write(" 0-4 --> Catastrophique, il faut tout revoir<br>")
// }else{
// if((x <= 10)){
//     document.write(" 5-10 --> Insuffisant<br>")
// }else{
// if((x <= 14)){
//     document.write(" 11-14 --> Peut mieux faire<br>")
// }else{
// if((x <= 17)){
//     document.write(" 15-17 --> Bien<br>")
// }else{
// if((x <= 20)){
//     document.write(" 18-20 --> Excellent, Bon travail<br>")
// }else{
//     if((x < 0) || (x > 20)){
//         document.write("Saisir une note entre 0 et 20<br>")
//     }
// }
// }
// }
// }
// }
// }
// document.write("</h1>")

// Exo 8

// let n = parseInt(prompt("Entrez un nombre :"));
// let etoiles = '';

// if (!isNaN(n) && n > 0) {
//     for (let i = 1; i <= n; i++) {
//          etoiles = '';
//         for (let j = 0; j < i; j++) {
//             etoiles += '*'; // etoiles = etoiles + "*";
//         }
//         document.write(etoiles);
//         document.write("<br/>");
//     }
// } else {
//     alert("Entrer un nombre valide");
// }

// Deuxième solution Exo 8

// let n = parseInt(prompt("donner un entier"));
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// Exo 9
let n = parseInt(prompt("donner un entier"));
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        document.write("");
    }
    document.write("<br>");
}
for (let i = (n-1); i >= 1; i--) {
    for (let j = 0; j < i; j++) {
        document.write("");
    }
    document.write("<br>");
}
