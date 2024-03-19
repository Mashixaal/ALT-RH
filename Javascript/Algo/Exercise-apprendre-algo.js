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
// let n = parseInt(prompt("donner un entier"));
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }
// for (let i = (n-1); i >= 1; i--) {
//     for (let j = 0; j < i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// Exo 10
// let n = parseInt(prompt("donner un entier positif"));
// let i = 1;
// let j = 2;
// document.write("Les nombres premiers entre 1 et " + n + " :<br>");
// while (i <= n) {
//     j = 2;
//     while ((i%j != 0) && (j < i/2)) {
//         j++;
//     }
//     if (j > i/2) {
//         document.write(i + "<br>");
//     }
//     i++;
// }

// Exo 11
let mnt = prompt("Entrer un montant en euro");
let partieEntiere = parseInt(mnt);
let partieFlottante = (mnt - partieEntiere) * 100;
partieFlottante = partieFlottante.toFixed(2);
let b500 = parseInt(partieEntiere / 500);
let b200 = parseInt((partieEntiere - (b500 * 500)) / 200);
let b100 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200)) / 100);
let b50 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100)) / 50);
let b20 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50)) / 20); 
let b10 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50) - (b20 * 20)) / 10); 
let b5 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50) - (b20 * 20) - (b10 * 10)) / 5); 
let p2e = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50) - (b20 * 20) - (b10 * 10) - (b5 * 5)) / 2); 
let p1e = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50) - (b20 * 20) - (b10 * 10) - (b5 * 5) - (p2e * 2)) / 1); 

let p50 = parseInt(partieFlottante / 50);
let p20 = parseInt((partieFlottante - (p50 * 50)) / 20);
let p10 = parseInt((partieFlottante - (p50 * 50) - (p20 * 20)) / 10);
let p5 = parseInt((partieFlottante - (p50 * 50) - (p20 * 20) - (p10 * 10)) / 5);
let p2 = parseInt((partieFlottante - (p50 * 50) - (p20 * 20) - (p10 * 10) - (p5 * 5)) / 2); 
let p1 = parseInt((partieFlottante - (p50 * 50) - (p20 * 20) - (p10 * 10) - (p5 * 5) - (p2 * 2)) / 1); 

// document.write("<h1> Billet de 500 : " + b500 + ", billet de 200 : " + 
// b200 + ", billet de 100 : " + b100 + ", billet de 50 : " + b50 
// + ", billet de 20 : " + b20 + ", billet de 10 : " + b10 + ", billet de 5 : " +
// b5 + ", pièces de 2 : " + p2 + ", pièces de 1 : " + p1 + "</h1>");
document.write("Le montant est : " + mnt + " €<br>");
if (b500 != 0) {
    document.write("Billet de 500€ : " + b500 + "<br>");
}
if (b200 != 0) {
    document.write("Billet de 200€ : " + b200 + "<br>");
}
if (b100 != 0) {
    document.write("Billet de 100€ : " + b100 + "<br>");
}
if (b50 != 0) {
    document.write("Billet de 50€ : " + b50 + "<br>");
}
if (b20 != 0) {
    document.write("Billet de 20€ : " + b20 + "<br>");
}
if (b10 != 0) {
    document.write("Billet de 10€ : " + b10 + "<br>");
}
if (b5 != 0) {
    document.write("Billet de 5€ : " + b5 + "<br>");
}
if (p2e != 0) {
    document.write("Pièce de 2€ : " + p2e + "<br>");
}
if (p1e != 0) {
    document.write("Pièce de 1€ : " + p1e + "<br>");
}
if (p50 != 0) {
    document.write("Pièce de 0,50€ : " + p50 + "<br>");
}
if (p20 != 0) {
    document.write("Pièce de 0,20€ : " + p20 + "<br>");
}
if (p10 != 0) {
    document.write("Pièce de 0,10€ : " + p10 + "<br>");
}
if (p5 != 0) {
    document.write("Pièce de 0,05€ : " + p5 + "<br>");
}
if (p2 != 0) {
    document.write("Pièce de 0,02€ : " + p2 + "<br>");
}
if (p1 != 0) {
    document.write("Pièce de 0,01€ : " + p1 + "<br>");
}
