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

// let a = parseInt(prompt("entrer la valeur de a"));
// let b = parseInt(prompt("entrer la valeur de b"));
// let c = parseInt(prompt("entrer la valeur de c"));

// let delta 
// delta = ((b*b)-4*a*c);
// if(delta < 0){
//     alert("pas de solution dans R");

// }else{
//     if(delta == 0){
//         alert("x = " + (-b/(2*a)));
//     }else{
//         alert(" x1 = " + (-b - Math.sqrt(delta))/(2*a));
//         alert(" x2 = " + (-b + Math.sqrt(delta))/(2*a));
//     }
// }


// Exercise 5

// let x = parseInt(prompt("choisie une valeur "));
// let a = prompt("choisir le type d'operation " );
// let y = parseInt(prompt("choisie une valeur "));

// if(a=== "+"){
//     alert(x+y)
// }else{
//     if(a=== "-"){
//         alert(x-y)
//     }else{
//         if(a=== "*"){
//             alert(x*y)
//         }else{
//             if(a=== "/"){
//                 if(y!=0){
//                     alert(x/y)
//                 }else{
//                     alert("impossible de divise par 0")
//                 }
//             }else{
//                 alert("operateur inexistant")
//             }
//         }
//     }
// }

// Exercise 6

let carac = prompt("Entrer un caractère");
if(carac >= 'a' && carac <= 'z'){
    alert("miniscule");
}else{
    if(carac >= 'A' && carac <= 'Z'){
        alert("majuscule");
    }else{
        if(carac >= '0' && carac <= '9'){
            alert("chiffre");
        }else{
            alert("spéciale");
        }
    }
}