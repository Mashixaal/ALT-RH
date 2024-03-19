// déclaration de variables
let x;
let y;
// Affection des valeurs
x = 5 // permet de stocker la valeur 5 dans x
y = 2 // permet de stocker la valeur 2 dans y
// Affichage des valeurs
    // boite de dialogue
        // alert("La valeur de x est : " + x + ", et la valeur de y est : " + y);
    // console
        console.log("La valeur de x est : " + x); 
    // write
        document.write("La valeur de x est : " + (x + y));
// Lecture à partir du clavier
    // let nbr = prompt("Entrer un entier");
// Structures conditionnelles
// problème : n est pair ou non?

let n = prompt("Entrer un entier");
// if ((n%2) != 0) { // si le reste de la division de n par 2 est égal à 0
//     alert(n + " est impair");
// }else{
//     alert(n + " est pair");
// }
// Exercice : Afficher un message selon n (positif, null ou négatif)
// première solution
if(n > 0){
    alert(n + " est positif");
}else{
    if(n < 0){
        alert(n + " est négatif");
    }else{
        alert(n + " est null");
    }
}
// deuxième solution (déconseillée)
if(n > 0){
    alert(n + " est positif");
}
if(n < 0){
    alert(n + " est négatif");
}
if(n == 0){
    alert(n + " est null");
}
