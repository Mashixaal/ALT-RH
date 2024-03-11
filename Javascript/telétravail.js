// Exercise 1

// let x = parseInt(prompt("choisie un entier"));
// let y = parseInt(prompt("choisie un entier"));
// alert ("le somme est " + (x+y));
// alert ("le produit est " + (x*y));

// Exercise 2

// let l = parseInt(prompt("choisie un rayon"));
// let t = parseInt(prompt("choisie un rayon"));
// alert ("le périmètre est " + (l+t));
// alert ("le surface est " + (l*t));

// Exercise 3

// let x = parseInt(prompt("Entrer la valeur de x"));
// let y = parseInt(prompt("Entrer la valeur de y"));

// document.write("valeurs de départ : " + x + " et " + y + "<br>");

// x = x + y;
// y = x - y;
// x = x - y;

// document.write("valeurs après traitement : " + x + " et " + y + "<br>");


// Exercise 4

let a = parseInt(prompt("entrer la valeur de a"));
let b = parseInt(prompt("entrer la valeur de b"));
let c = parseInt(prompt("entrer la valeur de c"));

let delta 
delta = ((b*b)-4*a*c);
if(delta < 0){
    alert("pas de solution dans R");

}else{
    if(delta == 0){
        alert("x = " + (-b/(2*a)));
    }else{
        alert(" x1 = " + (-b - Math.sqrt(delta))/(2*a));
        alert(" x2 = " + (-b + Math.sqrt(delta))/(2*a));
    }
}

