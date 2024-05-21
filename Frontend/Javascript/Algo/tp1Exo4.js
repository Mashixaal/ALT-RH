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