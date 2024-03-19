// Exercise 1

//  n1 = prompt ("entrer un nombre");
//  n2 = prompt ("entrer un nombre");
//  q = parseInt(n1/n2);
//  r = (n1%n2)
//  alert (q )
//  alert ( r)



// Exercise 2

// let x = prompt ("Enter a number")
// let y = prompt ("Enter a number")
// let i = prompt ("Enter a number")
// document.write("avant persulation : "+ x +" - ' + y + " - " );





// Exercise 3

// let x = parseInt(prompt("Entrer la valeur de x"));
// let y = parseInt(prompt("Entrer la valeur de y"));

// document.write("valeurs de départ : " + x + " et " + y + "<br>");

// x = x + y;
// y = x - y;
// x = x - y;

// document.write("valeurs après traitement : " + x + " et " + y + "<br>");


// Exercise 4

let x = prompt("Entrer un nombre positif");
let y = prompt("Entrer un nombre négatif");
while ((x>0 && y>9) || (x>0 && y>0))
{
    x = prompt("Entrer un nombre positif") // pour faire la boucle pour mettre un nombre positif
    y = prompt("Entrer un nombre négatif") // pour faire la boucle pour mettre un nombre négatif
} 

if (x > 0) {
    alert("le positif est x : + x")
}